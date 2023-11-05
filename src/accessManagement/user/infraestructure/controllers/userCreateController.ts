import { Request, Response } from 'express';
import { UserCreateUseCase } from '../../application/userCreateUseCase';
import { User } from '../../domain/entities/user';
import { validate, ValidationError } from 'class-validator';

export class UserCreateController {
    constructor(readonly UserCreateUseCase: UserCreateUseCase) { }

    async run(req: Request, res: Response) {
        console.log('controller');

        try {
            const {
                email,
                password,
                verified,
                idRole,
            } = req.body;

            const user = new User(email, password, verified, idRole);

            // Validar los datos utilizando class-validator
            const validationErrors: ValidationError[] = await validate(user);

            if (validationErrors.length > 0) {
                // Hay errores de validación, responder con un error 422
                return res.status(422).json({
                    status: "error",
                    message: "Datos de entrada no válidos",
                    errors: validationErrors,
                });
            }

            const createUser = await this.UserCreateUseCase.run(
                email,
                password,
                verified,
                idRole,
            );

            if (createUser instanceof Error) {
                return res.status(409).send({
                    status: "error",
                    message: createUser.message,
                });
            }

            if (createUser instanceof User) {
                return res.status(201).send({
                    status: "success",
                    data: {
                        email: createUser.email,
                        verified: createUser.verified,
                        idRole: createUser.idRole,
                    },
                });
            } else {
                return res.status(500).send({
                    status: "error",
                    message: "Se registró un error inesperado mientras se registraban los datos del usuario.",
                });
            }
        } catch (error) {
            return res.status(500).send({
                status: "error",
                message: "Ocurrió un error inesperado. Por favor, inténtalo de nuevo más tarde.",
            });
        }
    }
}
