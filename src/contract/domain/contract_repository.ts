import { Contract } from "./contract";

export interface ContractRepository {
    createContract(
        amount: number,
        start_date: Date,
        expiration_date: Date,
        status: string,
        iduser: number,
        idoffice: number,

    ): Promise<Contract | null>;

    updateContract(status: string, id: number): Promise<Contract | null>;

    getContractById(id: number): Promise<Contract | null>;

}

