import { Request, Response } from "express";
import { UpdatePersonAddressUseCase } from "../../application/updatePersonAddressUseCase";

export class UpdatePesonAddressController {
    constructor(readonly updatePersonAddressUseCase: UpdatePersonAddressUseCase) { }

    async run(req: Request, res: Response) {
        try {
            let {
                id
            } = req.params

            let {
                id_address
            } = req.body

            let updatedPerson = await this.updatePersonAddressUseCase.run(parseInt(id), id_address);
            if (updatedPerson) {
                //const updatedPersonNumber = Number(updatedPerson);
                return res.status(201).send({
                    status: "success",
                    message: "Direccion asignada con éxito",
                    //data: updatedPerson,
                    
                   // data: updatedPerson,
                });
            } else {
                return res.status(500).send({
                    status: "error",
                    message: "No se encontró o no se puede asignar la direccion",
                });
            }
        } catch (error) {
            console.error("Error update status:", error);
            return res.status(500).send({
                status: "error",
                message: "Error al asignar la direccion",
            });
        }
    }
}