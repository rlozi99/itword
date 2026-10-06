terraform {
  required_version = ">= 1.5"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }
  }

  backend "s3" {
    bucket         = "salpim-terraform-state"
    key            = "itword/terraform.tfstate"
    region         = "ap-northeast-2"
    dynamodb_table = "salpim-terraform-lock"
    encrypt        = true
  }
}

provider "aws" {
  region = "ap-northeast-2"

  default_tags {
    tags = {
      Project   = "itword"
      ManagedBy = "terraform"
    }
  }
}