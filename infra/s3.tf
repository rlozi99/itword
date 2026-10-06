locals {
  bucket_name = "itword-site-5291399"
}

# 단어장 파일을 담는 비공개 버킷
resource "aws_s3_bucket" "site" {
  bucket = local.bucket_name
}

# 퍼블릭 액세스 전부 차단 (CloudFront만 읽게 할 거라서)
resource "aws_s3_bucket_public_access_block" "site" {
  bucket = aws_s3_bucket.site.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}