import { Contract } from "../domain/contract";
import { ContractRepository } from "../domain/contract_repository";
import { validate } from "class-validator";
import { ValidationId } from "../domain/validation/validationContract";

export class GetContractByIdUseCase {
    constructor(readonly contractRepository: ContractRepository) { }

    async getById(id: number): Promise<Contract | null> {

        const validationGetID = new ValidationId(id);
        const validationContract = await validate(validationGetID);

        if (validationContract.length > 0) {
            throw new Error(JSON.stringify(validationContract));
        }

        try {
            const category = await this.contractRepository.getContractById(id);
            return category;
        } catch (error) {
            return null;
        }
    }
}
