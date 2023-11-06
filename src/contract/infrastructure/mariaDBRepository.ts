import { query } from "../../database/mariaDb";
import { ContractRepository } from "../domain/contract_repository";
import { Contract } from "../domain/contract";

export class MariaDBRepository implements ContractRepository {

    async getContractById(id: number): Promise<Contract | null> {
        const sql = "SELECT * FROM contract WHERE id = ?";
        try {
            const result = await query(sql, [id]);
            console.log('Resultado: ', result.length);
            if (result.length === 0) {
                return null;
            }
            const contract = result[0];

            return new Contract(
                contract.id,
                contract.amount,
                contract.start_date,
                contract.expiration_date,
                contract.status,
                contract.iduser,
                contract.idoffice
            );
        } catch (error) {
            console.error("Error al obtener el contrato:", error);
            return null;
        }
    }

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
                const updatedContract = new Contract(
                    1000, 2500, new Date("2013-10-21"), new Date("2013-10-21"), "se canceló el anterior", 1, 1
                ); // Implementa una función para obtener el contrato por ID
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

}