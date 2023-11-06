import { User } from '../domain/entities/user'; // Asegúrate de importar la entidad User
import { UserRepository } from '../domain/repositories/userRepository';

// Asegúrate de importar el repositorio adecuado para User
import { UserValidate } from '../domain/validators/userValidate'; // Asegúrate de importar el validador adecuado para User

export class UserCreateUseCase {

    constructor(readonly userRepository: UserRepository) { }

    async run(
        email: string,
        password: string,
        verified: Date,
        idRole: number,
    ): Promise<User | null | number | Error> {
        try {
            if (!email || !password || !verified || !idRole) {
                return null;
            }

            const registerUser = await this.userRepository.createUser(email, password, verified, idRole);

            if (registerUser === null) {
                return null;
            }

            return registerUser;
        } catch (error) {
            return null;
        }
    }
}
