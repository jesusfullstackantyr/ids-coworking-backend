import { UserRepository } from "../domain/repositories/UserRepository";

export class UserDeleteUseCase {

    constructor(private readonly userRepository: UserRepository) {}

    async execute(id: number): Promise<boolean> {
        try {
            const deleted = await this.userRepository.deleteUser(id);

            if (deleted) {
                return true;
            } else {
                throw new Error(`No se pudo eliminar el usuario con el ID ${id}.`);
            }
        } catch (error) {
            // Manejar errores de la base de datos
            console.error(`Error al eliminar el usuario con el ID ${id}:`, error);
            throw error;
        }
    }
}
