// import { Contract } from "../domain/contract";
// import { ContractRepository } from "../domain/contract_repository";
import { Contract } from "../domain/entities/contract";
import { ContractRepository } from "../domain/interfaces/contract_repository";

export class GetContractByIdUseCase{
    constructor( readonly ContractRepository: ContractRepository){}


    async getContractById(id:number):Promise<Contract | null>{
        if (!id){
            return null;
        }
        try {
            const get = await this.ContractRepository.getContractById(id);
            return get;
            
        } catch (error) {
            return null
        
        }
    }
}