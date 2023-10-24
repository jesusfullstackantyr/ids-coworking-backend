import { query } from "../../database/mariaDb";
import { Person } from "../domain/person";
import { PersonRepository } from "../domain/personRepository";

export class MariadbPersonRepository implements PersonRepository {

<<<<<<< HEAD
<<<<<<< HEAD
    async registerPerson(name: string, lastname: string, email: string, phone: number, occupation: string, id_address: number, id_user:number, status: string): Promise<Person | null> {
      
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
}
=======
    async updatePersonAddress(id: number, id_address: number): Promise<Person | null> {
        try {
            const personQuery = "SELECT * FROM person WHERE id = ?";
            const personResult = await query(personQuery, [id]);
            if (personResult.length === 0) {
                console.error("No se encontró ninguna persona con el ID proporcionado");
                return personResult;
            }

            const updateQuery = "UPDATE person SET id_address = ? WHERE id = ?";
            const updateResult = await query(updateQuery, [id_address, id]);
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

    async listAllPersons(): Promise<Person[] | null> {
        try {
            const sql = `SELECT id, name, lastname, email, phone, occupation, id_address, id_user, status FROM person`;
        // No necesitas parámetros en esta consulta, por lo que no es necesario definir 'params'.
        const params: any[] = [];  // No hay parámetros en esta consulta
        const result = await query(sql,params);

        // Verifica si se obtuvieron resultados
        if (Array.isArray(result) && result.length > 0) {
            // Mapea los resultados a objetos Person y devuelve una matriz de Person
            const persons: Person[] = result.map((row: any) => new Person(row.name, row.lastname, row.email, row.phone.toString(), row.occupation, row.id_address, row.id_user, row.status));
            return persons;
        } else {
            // No se encontraron registros, devuelve una matriz vacía
            return [];
        }
    } catch (error) {
        console.error("Error al listar personas: ", error);
        return null;
    }
}
}
>>>>>>> eb33269aad852f9d8c41ad3af7075e180e2f12f5
=======
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
>>>>>>> 4937744aa77bfc5f0fd945fc037deae94137f9d1
