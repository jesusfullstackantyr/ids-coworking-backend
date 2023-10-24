import { Request, Response, NextFunction } from 'express';
import multer from 'multer';
import { uploadToS3 } from './s3Storage';

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const s3UploaderMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const uploader = upload.single('image');  // 'image' es el nombre del campo en el formulario.

    uploader(req, res, async (err) => {
        if (err) {
            return res.status(400).send({ message: "Error uploading file." });
        }

        // Si no hay archivo, continúa.
        if (!req.file) {
            return next();
        }

        // Sube el archivo a S3.
        try {
            const imageUrl = await uploadToS3(req.file.buffer, req.file.originalname, req.file.mimetype);
            req.body.image_url = imageUrl;  // Almacena la URL en el body para su uso posterior.
            next();
        } catch (e) {
            res.status(500).send({ message: "Error uploading to S3." });
        }
    });
};

export default s3UploaderMiddleware;
