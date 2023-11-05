import { Request, Response } from 'express';
import { AddUserUseCase } from '../../application/addUserUseCase';
import { User } from '../../domain/entities/user';

export class AddUserController {

    constructor(private readonly addUserUseCase: AddUserUseCase) { }

    async run(req: Request, res: Response) {
        console.log('controller');

        try {
            const {email, password, verified, idRole } = req.body;
            console.log(req.body);

            let addedUser = await this.addUserUseCase.addUser(
                //id,
                email,
                password,
                verified,
                idRole
            );

            if (addedUser instanceof Error) {
                return res.status(409).send({
                    status: "error",
                    message: addedUser.message
                });
            }
            
            if (addedUser instanceof User) {
                return res.status(201).send({
                    status: "success",
                    data: {
                        email: addedUser.email,
                        verified: addedUser.verified,
                        idRole: addedUser.idRole
                    }
                });
            } else {
                return res.status(500).send({
                    status: "error",
                    message: "Se registró un error inesperado mientras se se actualizaban la contraseña."
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