import { User } from '../domain/user';
import { UserRepository } from '../domain/userRepository';

export class AddUserUseCase {

    constructor(private readonly userRepository: UserRepository) { }

    async addUser(
        email: string,
        password: string,
        verified: boolean,
        idRole: number
    ): Promise<User | null | Error> {
        try {
            if (!email || !password) {
                throw new Error('Email y contraseña son obligatorios.');
            }

            const addedUser = await this.userRepository.addUser(email, password, verified, idRole);

            if (addedUser === null) {
                throw new Error('No se pudo agregar el usuario.');
            }

            return addedUser;
        } catch (error: any) {
            throw new Error('Error al agregar usuario: ' + error.message);
        }
    }
}
