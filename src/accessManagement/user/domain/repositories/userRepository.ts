import { User } from '../entities/user'; // Importa la clase User en lugar de Person

export interface UserRepository {
    getUser(
        id: number,
        idRole: number
    ): Promise<User | null | Error>
}
