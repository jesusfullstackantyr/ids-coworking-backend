import { Request, Response } from "express";
import { UpdatePersonAddressUseCase } from "../../application/updatePersonAddressUseCase";

export class UpdatePersonAddressController {
    constructor(readonly updatePersonAddressUseCase : UpdatePersonAddressUseCase ) { }

    async run(req: Request, res: Response) {
        try {
            let {
                id
            } = req.params

            let {
                id_address
            } = req.body
            
            let updatedPerson = await this.updatePersonAddressUseCase .run(parseInt(id), id_address);

            if (updatedPerson) {
                return res.status(201).send({
                    status: "success",
                    message: "Persona actualizada con éxito",

                    
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
