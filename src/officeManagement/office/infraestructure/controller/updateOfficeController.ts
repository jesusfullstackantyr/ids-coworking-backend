import { Request, Response } from 'express';
import { UpdateOfficeUseCase } from '../../application/updateOfficeUsecase';
import { HTTPStatusCodes } from '../../domain/validation/HTTPStatusCodes';
import { OfficeValidation } from '../../domain/validation/officesValidation';
import s3UploaderMiddleware from '../storage/s3UploaderMiddleware';

export class UpdateOfficeController {
    constructor(private updateOfficeUseCase: UpdateOfficeUseCase) {}

    async handle(req: Request, res: Response): Promise<void> {
        try {
            s3UploaderMiddleware(req, res, async () => {
                const { name, image_url, status, id_category } = req.body;

                // Convierte 'id' a un número usando el operador + o parseInt
                const id = parseInt(req.params.id, 10);
                // Asegúrate de que el 'id' es un número válido
                if (isNaN(id)) {
                    return res.status(HTTPStatusCodes.BAD_REQUEST).send({ status: 'error', message: 'Invalid ID' });
                }

                const officeValidation = new OfficeValidation(id, name, image_url, status, Number(id_category));

                await this.updateOfficeUseCase.execute(officeValidation);
                res.status(HTTPStatusCodes.OK).send({ status: 'success', message: 'Office updated successfully' });
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
