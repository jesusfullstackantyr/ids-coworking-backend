import { Request, Response } from "express";
import { validate, ValidationError } from 'class-validator';
import { UpdatePersonUseCase } from "../../application/updatePersonUseCase";
import { Person } from '../../domain/entities/person';

export class UpdatePersonController {
    constructor(readonly updatePersonUseCase: UpdatePersonUseCase) { }

    async run(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { name, lastname, phone, email, occupation, id_address, id_user, status } = req.body;

            // Crear una instancia de Person con los campos relevantes para la actualización
            const updatedPersonData = new Person(name, lastname, email, phone, occupation, id_address, id_user, status);

            // Validar los datos utilizando class-validator con el grupo de validación "update"
            const validationErrors: ValidationError[] = await validate(updatedPersonData, { groups: ['update'] });

            if (validationErrors.length > 0) {
                // Hay errores de validación, responder con un error 422
                return res.status(422).json({
                    status: "error",
                    message: "Datos de entrada no válidos",
                    errors: validationErrors,
                });
            }

            const updatedPerson = await this.updatePersonUseCase.run(
                parseInt(id),
                updatedPersonData.name,
                updatedPersonData.lastname,
                updatedPersonData.phone
            );

            if (updatedPerson) {
                return res.status(201).send({
                    status: "success",
                    message: "Persona actualizada con éxito",
                    data: updatedPersonData,  // Solo devolver los datos actualizados
                });
            } else {
                return res.status(500).send({
                    status: "error",
                    message: "No se encontró o no se puede actualizar la persona",
                });
            }
        } catch (error) {
            console.error("Error al actualizar la persona:", error);
            return res.status(500).send({
                status: "error",
                message: "Error al actualizar la persona: " + error,
            });
        }
    }
}
