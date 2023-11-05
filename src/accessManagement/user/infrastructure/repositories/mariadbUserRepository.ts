import { query } from "../../../../database/mariaDb";
import { User } from "../../domain/entities/user";
import { UserRepository } from "../../domain/repositories/userRepository";

export class MariadbUserRepository implements UserRepository {

  async addUser(email: string, password: string, verified: Date, idRole: number): Promise<User | null> {
    try {
      let sql = "INSERT INTO users(email, password, verified, idRole) VALUES (?, ?, ?, ?)";
      const params = [email, password, verified, idRole];
      const result = await query(sql, params);
      if (result.affectedRows > 0) {
        const id = result.insertId;
        return new User(email, password, verified, idRole);
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error adding user: ", error);
      return null;
    }
  }
  async updateUserPassword(id: number, password: string): Promise<User | null> {
    try {
      const userQuery = "SELECT * FROM users WHERE id = ?";
      const userResult = await query(userQuery, [id]);
      if (userResult.length === 0) {
        console.error("No se encontró ninguna persona con el ID proporcionado");
        return null;
      }

      const updateQuery = "UPDATE users SET password = ? WHERE id = ?";
      const updateResult = await query(updateQuery, [password, id]);
      if (updateResult.affectedRows > 0) {
        console.log("Usuario actualizada con éxito");
        const updatedPerson: User = {
          email: userResult[0].email, password, verified: userResult[0].verified, idRole: userResult[0].idRole,
        };

        return updatedPerson;
      } else {
        console.error("No se pudo actualizar el password del usuario");
        return null;
      }
    } catch (error) {
      console.error("Error al validar el usurio:", error);
      return null;
    }
  }

}