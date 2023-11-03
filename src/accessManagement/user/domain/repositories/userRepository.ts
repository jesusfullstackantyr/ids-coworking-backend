import { User } from "../entities/user";

export interface UserRepository {
    createUser(userData: User): Promise<User | null>;
    updateUser(id: number, email: String, password: String, verified: Date, idRole: Number): Promise<User | null>;
    deleteUser(id: number): Promise<boolean>;
    getUserById(id: number): Promise<User | null>; // Método para obtener un usuario por su ID
}
