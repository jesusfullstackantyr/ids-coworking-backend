import { query } from "../../../database/mariaDb";
import { Person } from "../domain/person";
import { PersonRepository } from "../domain/personRepository";

export class MariadbPersonRepository implements PersonRepository {

    async registerPerson(name: string, lastname: string, email: string, phone: number, occupation: string, id_address: number, id_user:number, status: string): Promise<Person | null> {
      
        try {

            console.log(name, lastname, email, phone, occupation, id_address, id_user, status);

            let sql = "INSERT INTO coworking_db.Person(name, lastname, email, phone, occupation, id_address, id_user, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

            const params = [name, lastname, email, phone, occupation, id_address, id_user, status];
            const result = await query(sql, params);

            return new Person(name, lastname, email, phone, occupation, id_address, id_user, status);

        } catch (error) {
            console.error("Error adding person: ", error);
            return null;
        }
    }
}