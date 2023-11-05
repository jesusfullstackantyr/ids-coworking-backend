"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.s3Config = void 0;
exports.s3Config = {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.AWS_REGION
};
