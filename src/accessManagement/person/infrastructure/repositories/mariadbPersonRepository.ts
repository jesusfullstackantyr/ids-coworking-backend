import { query } from "../../../../database/mariaDb";
import { Person } from "../../domain/entities/person";
import { PersonRepository } from "../../domain/repositories/personRepository";

export class MariadbPersonRepository implements PersonRepository {

  async registerPerson(name: string, lastname: string, email: string, phone: string, occupation: string, id_address: number, id_user: number, status: string): Promise<Person | null> {

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

  async updatePerson(id: number, name: string, lastname: string, phone: string): Promise<Person | null> {
    try {
      const personQuery = "SELECT * FROM person WHERE id = ?";
      const personResult = await query(personQuery, [id]);

      if (personResult.length === 0) {
        console.error("No se encontró ninguna persona con el ID proporcionado");
        return null;
      }

      const updateQuery = "UPDATE person SET name = ?, lastname = ?, phone = ? WHERE id = ?";
      const updateResult = await query(updateQuery, [name, lastname, phone, id]);
      if (updateResult.affectedRows > 0) {
        console.log("Persona actualizada con éxito");

        // Crear un nuevo objeto Person con todas las propiedades
        const updatedPerson: Person = {
          name, lastname, email: personResult[0].c, phone: phone, occupation: personResult[0].occupation, id_address: personResult[0].id_address, id_user: personResult[0].id_user, status: personResult[0].status,
        };

        return updatedPerson;
      } else {
        console.error("No se pudo actualizar el estado de la persona");
        return null;
      }
    } catch (error) {
      console.error("Error al validar la persona:", error);
      return null;
    }
  }
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
  async updatePersonAddress(id: number, id_address: number): Promise<Person | null> {
    try {
      const personQuery = "SELECT * FROM person WHERE id = ?";
      const personResult = await query(personQuery, [id]);
      if (personResult.length === 0) {
        console.error("No se encontró ninguna persona con el ID proporcionado");
        return null;
      }

      const updateQuery = "UPDATE person SET id_address = ? WHERE id = ?";
      const updateResult = await query(updateQuery, [id_address, id]);
      if (updateResult.affectedRows > 0) {
        console.log("Persona actualizada con éxito");
        const updatedPerson: Person = {
          name: personResult[0].name, lastname: personResult[0].lastname, email: personResult[0].email, phone: personResult[0].phone, occupation: personResult[0].occupation, id_address, id_user: personResult[0].id_user, status: personResult[0].status,
        };

        return updatedPerson;
      } else {
        console.error("No se pudo actualizar el estado de la persona");
        return null;
      }
    } catch (error) {
      console.error("Error al validar la persona:", error);
      return null;
    }
  }
  async listAllPersons(): Promise<Person[] | null> {
    try {
      const sql = `SELECT id, name, lastname, email, phone, occupation, id_address, id_user, status FROM person`;
      const params: any[] = [];
      const result = await query(sql, params);
      if (Array.isArray(result) && result.length > 0) {
        const persons: Person[] = result.map((row: any) => new Person(row.name, row.lastname, row.email, row.phone.toString(), row.occupation, row.id_address, row.id_user, row.status));
        return persons;
      } else {
        return [];
      }
    } catch (error) {
      console.error("Error al listar personas: ", error);
      return null;
    }
  }
}