import { User } from '../entities/user';

export interface UserRepository {
    addUser(
        email: string,
        password: string,
        verified: Date,
        idRole: number
    ): Promise<User | null | Error>;
    updateUserPassword(id: number, password: string): Promise<User | null | string>
}