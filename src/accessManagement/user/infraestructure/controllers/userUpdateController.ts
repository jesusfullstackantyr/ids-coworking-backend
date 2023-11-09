import { Request, Response } from "express";
import { validate, ValidationError } from 'class-validator';
import { UserUpdateUseCase  } from "../../application/userUpdateUseCase"; // Asegúrate de importar el caso de uso correcto
import { User } from '../../domain/entities/user'; // Asegúrate de importar la entidad User

export class UserUpdateController {
    constructor(readonly updateUserUseCase: UserUpdateUseCase ) { }

    async run(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { email, password, verified, idRole } = req.body;

            // Crear una instancia de User con los campos relevantes para la actualización
            const updatedUserData = new User(email, password, verified, idRole);

            // Validar los datos utilizando class-validator con el grupo de validación "update"
            const validationErrors: ValidationError[] = await validate(updatedUserData);

            if (validationErrors.length > 0) {
                // Hay errores de validación, responder con un error 422
                return res.status(422).json({
                    status: "error",
                    message: "Datos de entrada no válidos",
                    errors: validationErrors,
                });
            }

            const updatedUser = await this.updateUserUseCase.run(parseInt(id), email, password, verified, idRole);

            if (updatedUser) {
                return res.status(200).send({
                    status: "success",
                    message: "Usuario actualizado con éxito",
                    data: {
                        email: updatedUser.email,
                        verified: updatedUser.verified,
                        idRole: updatedUser.idRole,
                    },
                });
            } else {
                return res.status(500).send({
                    status: "error",
                    message: "No se encontró o no se puede actualizar el usuario",
                });
            }
        } catch (error) {
            console.error("Error al actualizar el usuario:", error);
            return res.status(500).send({
                status: "error",
                message: "Error al actualizar el usuario: " + error,
            });
        }
    }
}
