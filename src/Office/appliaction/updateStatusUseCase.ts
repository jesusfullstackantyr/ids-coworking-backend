import { Office } from "../domain/office";
import { OfficeRepository } from "../domain/officeRepository";
import { ValidatorupdateStatus } from "../domain/validation/officesValidation";
import { validate } from 'class-validator';

export class UpdateStatus {
    constructor(readonly officeRepository: OfficeRepository) {}

    async run(id: number, status: string) {

        const validatorupdateStatus = new ValidatorupdateStatus(id, status);
        const errors = await validate(validatorupdateStatus);
        if (errors.length > 0) {
            console.error('Validation failed. errors: ', errors);
            throw new Error(JSON.stringify(errors));
            
        }

        try {
            const get = await this.officeRepository.updateStatus(id, status);
            return get;
        } catch (error) {
            return null;
        }
    }
}
