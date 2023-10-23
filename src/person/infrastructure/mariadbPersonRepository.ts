import { query } from "../../database/mariaDb";
import { Person } from "../domain/person";
import { PersonRepository } from "../domain/personRepository";

export class MariadbPersonRepository implements PersonRepository {

    async validatePerson(id_user: Number, status: string): Promise<boolean | null | Error> {
        console.log('first',)

        try {
            const personQuery = "SELECT * FROM person WHERE id_user = ?";
            const personResult = await query(personQuery, [id_user]);
            if (personResult.length === 0) {
                console.error("No se encontró ninguna persona con el ID proporcionado");
                return false;
            }

            const updateQuery = "UPDATE person SET status = ? WHERE id_user = ?";
            const updateResult = await query(updateQuery, [status, id_user]);
            if (updateResult.affectedRows > 0) {
                console.log("Persona aprobada con éxito");
                return true;
            } else {
                console.error("No se pudo actualizar el estado de la persona");
                return false;
            }
        } catch (error) {
            console.error("Error al validar la persona:", error);
            return false;
        }
    }

    async registerPerson(name: string, lastname: string, email: string, phone: number, occupation: string, id_address: number, id_user: number, status: string): Promise<Person | null> {

        try {
            // const hashPassword = await encrypt(password)

            let sql = "INSERT INTO person(name, lastname, email, phone, occupation, id_address, id_user, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
            const params = [name, lastname, email, phone, occupation, id_address, id_user, status];
            const result = await query(sql, params);
            return new Person(name, lastname, email, phone, occupation, id_address, id_user, status);
        } catch (error) {
            console.error("Error adding review:", error);
            return null;
        }
    }

}