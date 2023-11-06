import { Contract } from "../entities/contract"
export interface ContractRepository {
    updateContract(status: string, id: number): Promise<Contract | null>
    updateContractExpiration(expiration_date: Date, id: number): Promise<Contract | null>
    getContractById(id: number): Promise<Contract | null>
}
