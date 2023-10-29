import { query } from "../../../database/mariaDb";
import { Person } from "../domain/person";
import { PersonRepository } from "../domain/personRepository";

export class MariadbPersonRepository implements PersonRepository {

    async registerPerson(name: string, lastname: string, email: string, phone: string, occupation: string, id_address: number, id_user:number, status: string): Promise<Person | null> {
      
        try {

            console.log(name, lastname, email, phone, occupation, id_address, id_user, status);

            let sql = "INSERT INTO person(name, lastname, email, phone, occupation, id_address, id_user, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

            const params = [name, lastname, email, phone, occupation, id_address, id_user, status];
            const result = await query(sql, params);

            return new Person(name, lastname, email, phone, occupation, id_address, id_user, status);

        } catch (error) {
            console.error("Error adding person: ", error);
            return null;
        }
    }

    async updatePerson(id: number, name: string, lastname: string, phone: string): Promise<string | Person | null> {
        try {
            const personQuery = "SELECT * FROM person WHERE id = ?";
            const personResult = await query(personQuery, [id]);
            if (personResult.length === 0) {
                console.error("No se encontró ninguna persona con el ID proporcionado");
                return personResult;
            }

            const updateQuery = "UPDATE person SET name = ?, lastname = ?, phone = ? WHERE id = ?";
            const updateResult = await query(updateQuery, [name, lastname, phone, id]);
            if (updateResult.affectedRows > 0) {
                console.log("Persona aprobada con éxito");
                return updateResult;
            } else {
                console.error("No se pudo actualizar el estado de la persona");
                return updateResult;
            }
        } catch (error) {
            console.error("Error al validar la persona:", error);
            return null;
        }
    }
}