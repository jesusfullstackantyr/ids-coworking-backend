import { Request, Response } from 'express';
import { RegisterPersonUseCase } from '../../application/registerPersonUseCase';
import { Person } from '../../domain/entities/person';
import { validate, ValidationError } from 'class-validator';


export class RegisterPersonController {
    constructor(readonly registerPersonUseCase: RegisterPersonUseCase) { }

    async run(req: Request, res: Response) {
        console.log('controller');

        try {
            const {
                name,
                lastname,
                email,
                phone,
                occupation,
                id_address,
                id_user,
            } = req.body;

            const status = 'in process';

            const person = new Person(name, lastname, email, phone, occupation, id_address, id_user, status);

            // Validar los datos utilizando class-validator
            const validationErrors: ValidationError[] = await validate(person);

            if (validationErrors.length > 0) {
                // Hay errores de validación, responder con un error 422
                return res.status(422).json({
                    status: "error",
                    message: "Datos de entrada no válidos",
                    errors: validationErrors,
                });
            }

            const registerPerson = await this.registerPersonUseCase.run(
                name,
                lastname,
                email,
                phone,
                occupation,
                id_address,
                id_user,
                status,
            );

            if (registerPerson instanceof Error) {
                return res.status(409).send({
                    status: "error",
                    message: registerPerson.message,
                });
            }

            if (registerPerson instanceof Person) {
                return res.status(201).send({
                    status: "success",
                    data: {
                        name: registerPerson.name,
                        lastname: registerPerson.lastname,
                        email: registerPerson.email,
                        phone: registerPerson.phone,
                        occupation: registerPerson.occupation,
                        id_address: registerPerson.id_address,
                        id_user: registerPerson.id_user,
                        status: registerPerson.status,
                    },
                });
            } else {
                return res.status(500).send({
                    status: "error",
                    message: "Se registró un error inesperado mientras se registraban los datos.",
                });
            }
        } catch (error) {
            return res.status(500).send({
                status: "error",
                message: "An unexpected error occurred. Please try again later.",
            });
        }
    }
}