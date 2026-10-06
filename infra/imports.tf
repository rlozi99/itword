# 콘솔로 만든 기존 리소스를 Terraform 관리로 가져오기
/*
import {
  to = aws_s3_bucket.site
  id = local.bucket_name
}

import {
  to = aws_s3_bucket_public_access_block.site
  id = local.bucket_name
}
*/

import {
  to = aws_cloudfront_origin_access_control.site
  id = "EGJSQKUG3E6LW"
}

import {
  to = aws_cloudfront_distribution.site
  id = "E1L1YTJPW6II6A"
}

import {
  to = aws_s3_bucket_policy.site
  id = local.bucket_name
}