locals {
  # 콘솔이 자동으로 붙인 오리진 이름. 가져올 때 변경이 생기지 않게 그대로 둠
  origin_id = "itword-site-5291399.s3.ap-northeast-2.amazonaws.com-muvfq6e5xva"
}

# CloudFront만 버킷을 읽게 해주는 장치 (OAC)
resource "aws_cloudfront_origin_access_control" "site" {
  name                              = "oac-itword-site-5291399.s3.ap-northeast-2.amazonaws.-muvfrz5vgbi"
  description                       = "Created by CloudFront"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

# AWS가 제공하는 S3용 권장 캐시 정책
data "aws_cloudfront_cache_policy" "optimized" {
  name = "Managed-CachingOptimized"
}

resource "aws_cloudfront_distribution" "site" {
  enabled             = true
  default_root_object = "index.html" # 이게 없으면 루트 주소로 접속이 안 됨
  http_version        = "http2"
  is_ipv6_enabled     = true
  price_class         = "PriceClass_All"

  tags = {
    Name = "itword-site-cdn"
  }

  origin {
    domain_name              = aws_s3_bucket.site.bucket_regional_domain_name
    origin_id                = local.origin_id
    origin_access_control_id = aws_cloudfront_origin_access_control.site.id
  }

  default_cache_behavior {
    target_origin_id       = local.origin_id
    viewer_protocol_policy = "redirect-to-https"
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
    compress               = true
    cache_policy_id        = data.aws_cloudfront_cache_policy.optimized.id
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }
}

# "이 배포만 이 버킷의 파일을 읽을 수 있다"
resource "aws_s3_bucket_policy" "site" {
  bucket = aws_s3_bucket.site.id

  policy = jsonencode({
    Version = "2008-10-17"
    Id      = "PolicyForCloudFrontPrivateContent"
    Statement = [{
      Sid       = "AllowCloudFrontServicePrincipal"
      Effect    = "Allow"
      Principal = { Service = "cloudfront.amazonaws.com" }
      Action    = "s3:GetObject"
      Resource  = "${aws_s3_bucket.site.arn}/*"
      Condition = {
        ArnLike = { "AWS:SourceArn" = aws_cloudfront_distribution.site.arn }
      }
    }]
  })
}