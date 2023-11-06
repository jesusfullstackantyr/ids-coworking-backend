import { Contract } from "../domain/contract";
import { ContractRepository } from "../domain/contract_repository";

export class GetContractsUseCase{
    constructor( readonly ContractRepository: ContractRepository){}


    async get():Promise<Contract[] | null>{

        try {
            const get = await this.ContractRepository.getContracts();
            return get;
            
        } catch (error) {
            return null
        
        }
    }
}