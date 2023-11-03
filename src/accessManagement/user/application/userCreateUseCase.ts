import { UserRepository } from '../domain/repositories/UserRepository';
import { User } from '../domain/entities/user';
import { UserValidate } from '../domain/validators/userValidate';

export class UserCreateUseCase {

    constructor(private readonly userRepository: UserRepository) {}

    async execute(email: string, password: string, verified: Date, idRole: number): Promise<User | null> {
        try {
            // Validar los datos del usuario
            const user = new User(0,email, password, verified, idRole);
            const userValidator = new UserValidate(user);
            await userValidator.validate();

            // Crear el usuario en la base de datos
            const createdUser = await this.userRepository.createUser(user);

            return createdUser;
        } catch (error) {
            // Manejar errores de validación y de la base de datos
            console.error('Error al crear el usuario:', error);
            throw error;
        }
    }
}
