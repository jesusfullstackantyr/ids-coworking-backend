import { User } from '../domain/entities/user';
import { UserRepository } from '../domain/repositories/userRepository';
import { UserValidate } from '../domain/validators/userValidator';

export class GetUserClientUseCase {

    constructor(private readonly userRepository: UserRepository) { }

    async run(
        id: number,
        idRole: number
    ): Promise<User | null | Error> {
        try {
            const getUser = await this.userRepository.getUser(id, idRole);
            if (getUser === null) {
                throw new Error('No se pudo encontrar el usuario.');
            }

            return getUser;
        } catch (Error: any) {
            return new Error('Error al buscar usuario: ' + Error.message);
        }
    }
}
