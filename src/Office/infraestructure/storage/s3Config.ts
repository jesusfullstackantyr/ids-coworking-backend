import { S3 } from 'aws-sdk';

export const s3Config: S3.ClientConfiguration = {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.AWS_REGION
};
