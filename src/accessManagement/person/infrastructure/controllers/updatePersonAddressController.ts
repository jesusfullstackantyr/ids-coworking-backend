import { Request, Response } from "express";
import { UpdatePersonAddressUseCase } from "../../application/updatePersonAddressUseCase";
import { Person } from "../../domain/entities/person";
import { validate, ValidationError } from "class-validator";

export class UpdatePersonAddressController {
    constructor(readonly updatePersonAddressUseCase: UpdatePersonAddressUseCase) { }

    async run(req: Request, res: Response) {
        try {
            const {
                id
            } = req.params

            const {
                name,
                lastname,
                email,
                phone,
                occupation,
                id_address,
                id_user,
                status,
            } = req.body
            // Crear una instancia de Person con los campos relevantes para la actualización
            const updatedPersonData = new Person( name,lastname,email,phone,occupation,id_address,id_user,status);

            //let updatedPerson = await this.updatePersonAddressUseCase.run(parseInt(id), id_address);
            // Validar los datos utilizando class-validator con el grupo de validación "update"
            const validationErrors: ValidationError[] = await validate(updatedPersonData, { skipMissingProperties: true });

            if (validationErrors.length > 0) {
                // Hay errores de validación, responder con un error 422
                return res.status(422).json({
                    status: "error",
                    message: "Datos de entrada no válidos",
                    errors: validationErrors,
                });
            }

            const updatedPerson = await this.updatePersonAddressUseCase.run(parseInt(id), id_address);

            if (updatedPerson) {
                return res.status(201).send({
                    status: "success",
                    message: "Direccion asignada con éxito",
                });
            } else {
                return res.status(500).send({
                    status: "error",
                    message: "No se encontró o no se puede actualizar la direccion",
                });
            }
        } catch (error) {
            console.error("Error update status:", error);
            return res.status(500).send({
                status: "error",
                message: "Error al actualizar la direccion: ", error,
            });
        }
    }
}
