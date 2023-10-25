import { Request, Response } from 'express';
import { Office } from '../../domain/office';
import { CreateOfficeUseCase } from '../../application/createOfficeUseCase';
import { HTTPStatusCodes } from '../../domain/validation/HTTPStatusCodes';
import { OfficeValidation } from '../../domain/validation/officesValidation';
import s3UploaderMiddleware from '../storage/s3UploaderMiddleware'; // Asegúrate de actualizar la ruta

export class CreateOfficeController {
    constructor(private createOfficeUseCase: CreateOfficeUseCase) {}

    async handle(req: Request, res: Response): Promise<void> {
        try {
            // Primero, usa el middleware para procesar la imagen y cargarla a S3.
            s3UploaderMiddleware(req, res, async () => {
                // Una vez que se haya ejecutado el middleware, el cuerpo de la petición tendrá todos los datos del formulario.
                console.log(req.body); 
                
                const { name, image_url, status, id_category } = req.body;

                // Asegúrate de que id_category se convierta en un número si viene como texto.
                const officeValidation = new OfficeValidation(0, name, image_url, status, Number(id_category)); 
                
                await this.createOfficeUseCase.execute(officeValidation);
                res.status(HTTPStatusCodes.CREATED).send({ status: 'success', message: 'Office created successfully' });
            });
        } catch (error: any) {
            if (error.message === 'Validation failed!') {
                res.status(HTTPStatusCodes.BAD_REQUEST).send({ status: 'error', message: 'Validation failed', errors: error.errors });
            } else {
                res.status(HTTPStatusCodes.INTERNAL_SERVER_ERROR).send({ status: 'error', message: error.message });
            }
        }
    }
}
