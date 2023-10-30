import { User } from '../domain/entities/user';
import { UserRepository } from '../domain/repositories/userRepository';

export class GetUserClientUseCase {

    constructor(private readonly userRepository: UserRepository) { }

    async run(
        id: number,
        idRole: number
    ): Promise<User | null | Error> {
        try {
            if (!id || !idRole) {
                return new Error('id o rol no ingresados.');
            }

            const getUser = await this.userRepository.getUser(id, idRole);
            if (getUser === null) {
                throw new Error('No se pudo encontrar el usuario.');
            }

            return getUser;
        } catch (error: any) {
            return new Error('Error al buscar usuario: ' + error.message);
        }
    }
}
