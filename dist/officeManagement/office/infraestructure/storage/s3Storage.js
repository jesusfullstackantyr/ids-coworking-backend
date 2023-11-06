"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadToS3 = void 0;
const aws_sdk_1 = require("aws-sdk");
const s3Config_1 = require("./s3Config");
const s3 = new aws_sdk_1.S3(s3Config_1.s3Config);
const uploadToS3 = (fileBuffer, fileName, contentType) => __awaiter(void 0, void 0, void 0, function* () {
    const bucketName = process.env.AWS_S3_BUCKET;
    if (!bucketName) {
        throw new Error('AWS_S3_BUCKET environment variable is not set.');
    }
    const params = {
        Bucket: bucketName,
        Key: fileName,
        Body: fileBuffer,
        ContentType: contentType
    };
    yield s3.upload(params).promise();
    const awsRegion = process.env.AWS_REGION || 'us-east-2'; // Por defecto, si no está definida la variable de entorno, usamos 'us-east-1'
    return `https://${bucketName}.s3.${awsRegion}.amazonaws.com/${fileName}`;
});
exports.uploadToS3 = uploadToS3;
