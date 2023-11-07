// import { query } from "../../database/mariaDb";
import { query } from "../../../../database/mariaDb";
// import { ContractRepository } from "../domain/contract_repository";
// import { Contract } from "../domain/contract";
import { Contract } from "../../domain/entities/contract";
import { ContractRepository } from "../../domain/interfaces/contract_repository";
// import { ContractRepository } from "../../../../contract/domain/contract_repository";

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
            const params: any[] = [amount, start_date, expiration_date, status, iduser, idoffice];
            const result = await query(sql, params);

            // Ensure that the result contains the necessary data for creating a new Contract object
            if (result && result.insertId) {
                const createdContract = new Contract(result.insertId, amount, start_date, expiration_date, status, iduser, idoffice);
                return createdContract;
            } else {
                throw new Error("Failed to create the Contract. No valid result obtained from the database.");
            }
        } catch (error) {
            console.error("Error: ", error);
            throw new Error("Failed to create the Contract. Please try again later.");
        }


    }

    async updateContract(
        status: string,
        id: number


    ): Promise<Contract | null> {
        try {
            const sql = "UPDATE contract SET status = ? WHERE id = ?";
            const params: any[] = [status, id];
            const result = await query(sql, params);

            if (result && result.affectedRows > 0) {
                // Si al menos una fila fue afectada por la actualización, significa que se actualizó correctamente
                // Aquí necesitarías cargar y devolver el contrato actualizado desde la base de datos
                const updatedContract = this.getContractById(id) // Implementa una función para obtener el contrato por ID
                return updatedContract;
            } else {
                // Si no se afectó ninguna fila, el contrato con el ID especificado no fue encontrado en la base de datos
                return null;
            }
        } catch (error) {
            console.error("Error al actualizar el estado del contrato:", error);
            throw new Error("Failed to update the Contract. Please try again later.");
        }
    }
    async updateContractExpiration(expiration_date: Date, id: number): Promise<Contract | null> {
        try {
            const sql = "UPDATE contract SET expiration_date = ? WHERE id = ?";
            const params: any[] = [expiration_date, id];

            const result = await query(sql, params);

            if (result && result.affectedRows > 0) {
                // Si al menos una fila fue afectada por la actualización, significa que se actualizó correctamente
                // Aquí necesitarías cargar y devolver el contrato actualizado desde la base de datos
                const updated = this.getContractById(id);
                return updated;

            }
            else {
                // Si no se afectó ninguna fila, el contrato con el ID especificado no fue encontrado en la base de datos
                return null;
            }
        } catch (error) {
            console.error("Error al actualizar el estado del contrato:", error);
            throw new Error("Failed to update the Contract. Please try again later.");
        }
    }

    async getContracts(): Promise<Contract[] | null> {
        try {
            const sql = "SELECT * from contract";
            const params = [null]
            const result = await query(sql, params);
            const rows = Object.values(JSON.parse(JSON.stringify(result)))
            console.log("Filas de la base de datos antes del mapeo:", rows);
            if (result.lenght === 0) {
                return null;
            }
            return result.map((row: any) => new Contract(
                row.id,
                row.amount,
                row.start_date,
                row.expiration_date,
                row.status,
                row.id_user,
                row.id_office
            ));
            console.log("Filas de la base de datos DESPUES del mapeo:");



        } catch (error) {
            console.error("Error al actualizar el estado del contrato:", error);
            throw new Error("Failed to update the Contract. Please try again later.");
        }
    }
    async getContractById(id: number): Promise<Contract | null> {
        try {
            const sql = "SELECT * from contract WHERE id = ?";
            const params: any[] = [id];
            const result = await query(sql, params);
            const rows = Object.values(JSON.parse(JSON.stringify(result)))
            console.log("Filas de la base de datos antes del mapeo:", rows);
            if (result.lenght === 0) {
                return null;
            }
            return result.map((row: any) => new Contract(
                row.id,
                row.amount,
                row.start_date,
                row.expiration_date,
                row.status,
                row.id_user,
                row.id_office
            ));
            console.log("Filas de la base de datos DESPUES del mapeo:");


        } catch (error) {
            console.error("Error al actualizar el estado del contrato:", error);
            throw new Error("Failed to update the Contract. Please try again later.");
        }
    }

}