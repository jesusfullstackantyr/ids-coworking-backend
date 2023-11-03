import { Request, Response } from 'express';
import { UserCreateUseCase } from '../../application/userCreateUseCase';

export class UserCreateController {
    constructor(private readonly createUserUseCase: UserCreateUseCase) {}

    async createUser(request: Request, response: Response): Promise<void> {
        try {
            const { email, password, verified, idRole } = request.body;

            // Validar los datos del usuario aquí si es necesario...

            // Ejecutar el caso de uso para crear el usuario
            const createdUser = await this.createUserUseCase.execute(email, password, verified, idRole);

            // Manejar el resultado de la creación
            response.status(201).json(createdUser);
        } catch (error: any) {
            // Manejar errores y enviar una respuesta de error al cliente
            console.error('Error al crear el usuario:', error);
            response.status(error.http_status || 500).json({
                message: 'Error while creating user',
                error: error.message || 'Internal Server Error',
            });
        }
    }
}
