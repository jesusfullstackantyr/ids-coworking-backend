import { S3 } from 'aws-sdk';
import { s3Config } from './s3Config';

const s3 = new S3(s3Config);

export const uploadToS3 = async (fileBuffer: Buffer, fileName: string, contentType: string): Promise<string> => {
    const bucketName = process.env.AWS_S3_BUCKET;
    
    if (!bucketName) {
        throw new Error('AWS_S3_BUCKET environment variable is not set.');
    }

    const params = {
        Bucket: bucketName,  // Aquí, ya estamos seguros de que bucketName es una cadena válida.
        Key: fileName,
        Body: fileBuffer,
        ContentType: contentType
    };

    await s3.upload(params).promise();

    const awsRegion = process.env.AWS_REGION || 'us-east-2';  // Por defecto, si no está definida la variable de entorno, usamos 'us-east-1'

    return `https://${bucketName}.s3.${awsRegion}.amazonaws.com/${fileName}`;
};
