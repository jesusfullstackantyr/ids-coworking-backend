import { User } from './user';

export interface UserRepository {
    addUser(
        //id: number,
        email: string,
        password: string,
        verified: Date,
        idRole: number
    ): Promise<User | null | Error>;
    updateUserPassword(id: number, password: string): Promise<User | null | string>
}