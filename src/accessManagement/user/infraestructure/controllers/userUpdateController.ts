import { Request, Response } from 'express';
import { UserUpdateUseCase } from '../../application/userUpdateUseCase';

export class UserUpdateController {
    constructor(private readonly updateUserUseCase: UserUpdateUseCase) {}

    async updateUser(request: Request, response: Response): Promise<void> {
        try {
            const { email, password, verified, idRole } = request.body;
            const { id } = request.params; // Obtener el ID del usuario de los parámetros de la URL
            
            // Ejecutar el caso de uso para actualizar el usuario
            const updatedUser = await this.updateUserUseCase.execute(parseInt(id),email, password, verified, idRole); // Convertir el ID a número

            // Manejar el resultado de la actualización
            if (updatedUser) {
                response.status(200).json(updatedUser);
            } else {
                response.status(404).json({ message: 'El usuario no se encontró para actualizar.' });
            }
        } catch (error: any) {
            // Manejar errores y enviar una respuesta de error al cliente
            console.error('Error al actualizar el usuario:', error);
            response.status(500).json({
                message: 'Error al actualizar el usuario',
                error: error.message || 'Internal Server Error',
            });
        }
    }
}
