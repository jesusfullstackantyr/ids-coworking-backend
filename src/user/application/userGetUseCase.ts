import { UserRepository } from '../domain/repositories/UserRepository';
import { User } from '../domain/entities/user';

export class GetUserByIdUseCase {

    constructor(private readonly userRepository: UserRepository) {}

    async execute(userId: number): Promise<User | null> {
        try {
            // Obtener el usuario de la base de datos por su ID
            const user = await this.userRepository.getUserById(userId);

            return user;
        } catch (error) {
            // Manejar errores de la base de datos
            console.error('Error al obtener el usuario por ID:', error);
            throw error;
        }
    }
}
