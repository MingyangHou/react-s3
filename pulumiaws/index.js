'use strict';
const pulumi = require('@pulumi/pulumi');
const aws = require('@pulumi/aws');
const awsx = require('@pulumi/awsx');

// // Create an AWS resource (S3 Bucket)
// const bucket = new aws.s3.Bucket("my-bucket");

// // Export the name of the bucket
// exports.bucketName = bucket.id;

// import * as pulumi from '@pulumi/pulumi';
// import * as aws from '@pulumi/aws';

// import existing aws s3 bucket
const infra_logs = new aws.s3.Bucket(
  'infra-logs',
  {
    acl: 'private',
    bucket: 'ming-reactapp-s3',
    forceDestroy: false,
    website: {
      indexDocument: 'index.html',
    },
  },
  {
    protect: true,
  },
);
