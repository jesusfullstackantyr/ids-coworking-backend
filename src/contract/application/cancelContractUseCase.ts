import { Contract } from "../domain/contract";
import { ContractRepository } from "../domain/contract_repository";

export class CancelContractUseCase {
    constructor(readonly ContractRepository: ContractRepository){}

    async Cancel(
        status: string,
        id:number
    
    ): Promise<Contract | null> {
        try {

            if (!id || !status ){
                return null;
            }

            const UpdateContract = await this.ContractRepository.updateContract(
                status,
                id
            );

            if (UpdateContract === null){
                return null;
            }

            return UpdateContract;
        } catch (error) {
            return null;
        }
    }
}