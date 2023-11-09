// import { Contract } from "../domain/contract";
// import { ContractRepository } from "../domain/contract_repository";
import { Contract } from "../domain/entities/contract";
import { ContractRepository } from "../domain/interfaces/contract_repository";

export class UpdateContractExpirationUseCase {
    constructor(readonly ContractRepository: ContractRepository){}

    async updateContractExpiration(
        expiration_date: Date,
        id:number
    
    ): Promise<Contract | null> {
        try {

            if (!id || !expiration_date ){
                return null;
            }

            const updateContractExpiration = await this.ContractRepository.updateContractExpiration(
                expiration_date,
                id
            );

            if (updateContractExpiration === null){
                return null;
            }

            return updateContractExpiration;
        } catch (error) {
            return null;
        }
    }
}