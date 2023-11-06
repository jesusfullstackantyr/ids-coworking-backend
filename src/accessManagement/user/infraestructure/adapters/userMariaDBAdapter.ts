import { query } from "../../../../database/mariaDb";
import { User } from '../../domain/entities/user';
import { UserRepository } from "../../domain/repositories/userRepository";



export class UserMariaDBAdapterRepository implements UserRepository {

  
  async updateUser(id: number, email: String, password: String, verified: Date, idRole: Number):Promise <User | null> {
    try {
      const userQuery = "SELECT * FROM user WHERE id = ?";
      const userResult = await query(userQuery, [id]);
      if (userResult.length === 0) {
        console.error("No se encontró ninguna persona con el ID proporcionado");
        return null;

      }
      const updateQuery = "UPDATE user SET email = ?, password = ?, verified = ?, idRole = ? WHERE id= ?";
      const updateResult = await query(updateQuery, [email, password, verified, idRole, id]);
      if (updateResult.affectedRows > 0) {
        // Crear un nuevo objeto Person con todas las propiedades
        const updatedUser: User = {
          email: userResult[0].email, password: userResult[0].password, verified: userResult[0].verified, idRole: userResult[0].idRole, 
        };

        return updatedUser;
      } else {
        console.error("No se pudo actualizar el estado de la usuario");
        return null;
      }
    } catch (error) {
      console.error("Error al validar la persona:", error);
      return null;
    }
  }



  async deleteUser(id: number): Promise<boolean> {
    try {
      const sql = "DELETE FROM user WHERE id = ?";
      const params: any[] = [id];
      const result: any = await query(sql, params);

      if (result && typeof result.affectedRows === 'number' && result.affectedRows > 0) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
      throw error;
    }
  }

   async createUser(email : string, password:string, verified : Date, idRole:number ): Promise<User | null> {
    try {
      

      const sql = "INSERT INTO user (email, password, verified, idRole) VALUES (?, ?, ?, ?)";
      const params: any[] = [email, password, verified, idRole];
      const result: any = await query(sql, params);

      if (result.affectedRows > 0) {
        const createdUser = new User(email, password, verified, idRole);
        return createdUser;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error al crear el usuario:', error);
      throw error;
    }
  }

  async getUserById(userId: number): Promise<User | null> {
        try {
            const sql = 'SELECT * FROM user WHERE id = ?';
            const params: any[] = [userId];
            const result: any = await query(sql, params);

            if (result && result.length > 0) {
                const { email, verified, idRole } = result[0];
                return new User(email, verified, idRole, userId);
            } else {
                return null;
            }
        } catch (error) {
            console.error('Error al obtener el usuario por ID desde la base de datos:', error);
            throw error;
        }
    }
    async getUser(id: number, idRole: number): Promise<User | Error | null> {
      try {
          let sql = "SELECT * FROM user WHERE id = ? AND idRole = ?";
          const result = await query(sql, [id, idRole]);
          if (result.length > 0) {
              const userRow = result[0];
              const user = new User(userRow.email, userRow.password, userRow.verified, userRow.idRole);
              return user;
          }
          return null;

      } catch (Error) {
          console.error("Error buscando user: ", Error);
          return null;
      }
  }
}
