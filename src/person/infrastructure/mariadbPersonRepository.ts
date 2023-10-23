import { query } from "../../database/mariaDb";
import { Person } from "../domain/person";
import { PersonRepository } from "../domain/personRepository";

export class MariadbPersonRepository implements PersonRepository {

    async validatePerson(id_user: Number, status: string): Promise<boolean | null | Error> {
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
}