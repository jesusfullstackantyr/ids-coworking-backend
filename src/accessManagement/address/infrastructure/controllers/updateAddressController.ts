import { Request, Response } from "express";
import { UpdateAddressUseCase } from "../../application/updateAddressUseCase";

export class UpdateAddressController {
    constructor(readonly updateAddressUseCase: UpdateAddressUseCase) { }

    async run(req: Request, res: Response) {
        try {
            let {
                id
            } = req.params

            let {
                mainStreet,
                street_1,
                postalCode,
                street_2,
                colonia,
                municipio,
                country,

            } = req.body

            let updatedPerson = await this.updateAddressUseCase.run(parseInt(id), mainStreet, street_1, postalCode, street_2, colonia, municipio, country);

            if (updatedPerson) {
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