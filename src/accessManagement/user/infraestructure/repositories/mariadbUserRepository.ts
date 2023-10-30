import { query } from "../../../../database/mariaDb";
import { User } from "../../domain/entities/user";
import { UserRepository } from "../../domain/repositories/userRepository";

export class MariadbUserRepository implements UserRepository {
    async getUser(id: number, idRole: number): Promise<User | Error | null> {
        try {
            let sql = "SELECT * FROM user WHERE id = ? AND idRole = ?";
            const result = await query(sql, [id, idRole]);
            console.log('first', result)
            if (result.length > 0) {
                const userRow = result[0];
                const user = new User(userRow.id, userRow.email, userRow.password, userRow.verified, userRow.idRole);
                return user;
            }
            return null;

        } catch (error) {
            console.error("Error buscando user: ", error);
            return null;
        }
    }

}
