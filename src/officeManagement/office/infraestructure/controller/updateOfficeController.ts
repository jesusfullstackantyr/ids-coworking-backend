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
                console.log(req.body);

                const { id, name, image_url, status, id_category } = req.body;
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
