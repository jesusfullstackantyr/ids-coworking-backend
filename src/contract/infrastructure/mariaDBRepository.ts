import { query } from "../../database/mariaDb";
import { ContractRepository } from "../domain/contract_repository";
import { Contract } from "../domain/contract";

export class MariaDBRepository implements ContractRepository {
    async createContract(
        amount: number,
        start_date: Date,
        expiration_date: Date,
        status: string,
        iduser: number,
        idoffice: number,
    ): Promise<Contract | null> {
        try {
            const sql = "INSERT INTO contract (amount, start_date, expiration_date, status, id_user,id_office) VALUES (?,?,?,?,?,?)";
            const params: any[] = [amount, start_date, expiration_date, status, iduser,idoffice]; 
            const result = await query(sql, params);

            // Ensure that the result contains the necessary data for creating a new Contract object
            if (result && result.insertId) {
                const createdContract = new Contract(result.insertId, amount, start_date, expiration_date, status, iduser,idoffice);
                return createdContract;
            } else {
                throw new Error("Failed to create the Contract. No valid result obtained from the database.");
            }
        } catch (error) {
            console.error("Error: ", error);
            throw new Error("Failed to create the Contract. Please try again later.");
        }    
    }
}