import { Request, Response } from 'express';
import { Office } from '../../domain/office';
import { CreateOfficeUseCase } from '../../application/createOfficeUseCase';

export class CreateOfficeController {
    constructor(private createOfficeUseCase: CreateOfficeUseCase) {}

    async handle(req: Request, res: Response): Promise<void> {
        try {
            const { name, image_url, status, id_category } = req.body;
            const office = new Office(0, name, image_url, status, id_category); 
            await this.createOfficeUseCase.execute(office);
            res.status(201).send({ status: 'success', message: 'Office created successfully' });
        } catch (error: any) {
            res.status(500).send({ status: 'error', message: error.message });
        }
    }
}
