import { Request, Response } from 'express';
import { RegisterPersonUseCase } from '../../application/registerPersonUseCase';
import { Person } from '../../domain/person';

export class RegisterPersonController {

    constructor(readonly registerPersonUseCase: RegisterPersonUseCase) { }

    async run(req: Request, res: Response) {

        console.log('controller')

        try {
            let {
                name,
                lastname,
                email,
                phone,
                occupation,
                id_address,
                id_user,

            } = req.body
            console.log(req.body)

            const status = 'in process';

            let registerPerson = await this.registerPersonUseCase.run(
                status,
                name,
                lastname,
                email,
                phone,
                occupation,
                id_address,
                id_user,
            )

            if (registerPerson instanceof Error) {
                return res.status(409).send({
                    status: "error",
                    message: registerPerson.message
                });
            }
            if (registerPerson instanceof Person) {
                return res.status(201).send({
                    status: "success",
                    data: {
                        //id: registerPerson.id,
                        name: registerPerson.name,
                        lastname: registerPerson.lastname,
                        email: registerPerson.email,
                        phone: registerPerson.phone,
                        occupation: registerPerson.occupation,
                        id_address: registerPerson.id_address,
                        id_user: registerPerson.id_user,
                        status: registerPerson.status
                    }
                })
            }
            else {
                return res.status(500).send({
                    status: "error",
                    message: "Se registró un error inesperado mientras se registraban los datos."
                });
            }

        } catch (error) {

            // Error específico

            /*if (error instanceof Error) {
                if (error.message.includes('Duplicate entry') && error.message.includes('for key \'users.email\'')) {
                    return res.status(409).send({
                        status: "error",
                        message: "The email address is already in use. Please use a different email address.",
                    });
                } else if (error.message.startsWith('[')) {  // Suponiendo que los errores de validación comienzan con un corchete
                    return res.status(400).send({
                        status: "error",
                        message: "Validation failed",
                        errors: JSON.parse(error.message)  // Convertimos el mensaje de error en un objeto
                    });
                }
            }*/

            // Error general, error 500
            return res.status(500).send({
                status: "error",
                message: "An unexpected error occurred. Please try again later.",
            });
        }
    }
}