import { Contract } from "../entities/contract";
export interface ContractRepository {
    createContract(
        amount: number,
        start_date: Date,
        expiration_date: Date,
        status: string,
        iduser: number,
        idoffice: number,
    ):Promise<Contract | null>;
    updateContract(status:string,id:number): Promise<Contract | null>
    updateContractExpiration(expiration_date:Date,id:number): Promise<Contract | null>

    getContracts(): Promise<Contract[] | null>
    getContractById(id:number): Promise<Contract | null>


}
