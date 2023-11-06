import { Request, Response } from "express";
import { UpdateAddressUseCase } from "../../application/updateAddressUseCase";
import { Address } from "../../domain/entities/address";
import { validate,ValidationError } from "class-validator";

export class UpdateAddressController {
    constructor(readonly updateAddressUseCase: UpdateAddressUseCase) { }

    async run(req: Request, res: Response) {
        try {
            const {
                id
            } = req.params

            const {
                mainStreet,
                street_1,
                postalCode,
                street_2,
                colonia,
                municipio,
                country,

            } = req.body

             // Crear una instancia de Person con los campos relevantes para la actualización
             const updatedAddressData = new Address(mainStreet,street_1,postalCode,street_2,colonia,municipio,country);

            const validationErrors: ValidationError[] = await validate(updatedAddressData, { skipMissingProperties: true });
            if (validationErrors.length > 0) {
                // Hay errores de validación, responder con un error 422
                return res.status(422).json({
                    status: "error",
                    message: "Datos de entrada no válidos",
                    errors: validationErrors,
                });
            }

            const updatedAddress = await this.updateAddressUseCase.run(parseInt(id), mainStreet, street_1, postalCode, street_2, colonia, municipio, country);

            if (updatedAddress) {
                //const updatedPersonString = updatedPerson.toString();
                return res.status(201).send({
                    status: "success",
                    message: "Direccion actualizada con éxito",
                    data:{
                    mainStreet,
                    street_1,
                    postalCode,
                    street_2,
                    colonia,
                    municipio,
                    country,
                    }
                });
            } else {
                return res.status(500).send({
                    status: "error",
                    message: "No se encontró o no se puede actualizar la persona",
                });
            }
        } catch (error) {
            console.error("Error update status:", error);
            return res.status(500).send({
                status: "error",
                message: "Error al actualizar la persona: ", error,
            });
        }
    }
}