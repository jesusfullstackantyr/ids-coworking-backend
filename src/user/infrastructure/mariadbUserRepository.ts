import { query } from "../../database/mariaDb";
import { User } from "../domain/user";
import { UserRepository } from "../domain/userRepository";

export class MariadbUserRepository implements UserRepository {

    async addUser(email: string, password: string, verified: boolean, idRole: number): Promise<User | null> {
        try {
            console.log(email, password, verified, idRole);

            let sql = "INSERT INTO users(email, password, verified, idRole) VALUES (?, ?, ?, ?)";
            const params = [email, password, verified, idRole];
            const result = await query(sql, params);

            // Verificar si la inserción fue exitosa (result.affectedRows > 0) o si tienes otro criterio para validar
            if (result.affectedRows > 0) {
                // Suponiendo que result.insertId devuelve el ID del usuario insertado en la base de datos
                const userId = result.insertId;

                return new User(email, password, verified, idRole);
            } else {
                // La inserción falló, devolver null u otro valor indicando el fallo
                return null;
            }
        } catch (error) {
            console.error("Error adding user: ", error);
            return null;
        }
    }
}
