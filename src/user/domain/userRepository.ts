import { User } from './user'; // Importa la clase User en lugar de Person

export interface UserRepository {
    addUser(
        email: string,
        password: string,
        verified: boolean,
        idRole: number
    ): Promise<User | null | Error>;
}
