import { validate } from 'class-validator';
import { Office } from '../domain/entities/office';
import { OfficeRepository } from '../domain/repositories/officeRepository';
import { OfficeValidation } from '../domain/validation/officesValidation';

export class CreateOfficeUseCase {
    constructor(private officeRepository: OfficeRepository) {}  

    async execute(officeValidation: OfficeValidation): Promise<void> {
        const errors = await validate(officeValidation);
        if (errors.length > 0) {
            throw { message: 'Validation failed!', errors };
        }

        const office = new Office(
            officeValidation.id,
            officeValidation.name,
            officeValidation.image_url,
            officeValidation.status,
            officeValidation.id_category
        );

        await this.officeRepository.create(office);
    }
}