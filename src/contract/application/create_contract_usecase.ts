import { Contract } from "../domain/contract";
import { ContractRepository } from "../domain/contract_repository";

export class CreateContractUseCase {
    constructor(readonly ContractRepository: ContractRepository){}

    async create(
        amount: number,
        start_date: Date,
        expiration_date: Date,
        status: string,
        iduser: number,
        idoffice: number,
    ): Promise<Contract | null> {
        try {

            if (!amount || !start_date || !expiration_date || !status || !iduser || !idoffice){
                return null;
            }

            const createContract = await this.ContractRepository.createContract(

                amount,
                start_date,
                expiration_date,
                status,
                iduser,
                idoffice
            );

            if (createContract === null){
                return null;
            }

            return createContract;
        } catch (error) {
            return null;
        }
    }
}