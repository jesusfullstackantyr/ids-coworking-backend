import { Request, Response } from "express";
import { UpdatePersonUseCase } from "../../application/updatePersonUseCase";

export class UpdatePersonController {
    constructor(readonly updatePersonUseCase: UpdatePersonUseCase) { }

    async run(req: Request, res: Response) {
        try {
            let {
                id
            } = req.params

            let {
                name,
                lastname,
                phone
            } = req.body
            
            let updatedPerson = await this.updatePersonUseCase.run(parseInt(id), name, lastname, phone);
            if (updatedPerson) {
                //const updatedPersonString = updatedPerson.toString();
                return res.status(201).send({
                    status: "success",
                    message: "Persona actualizada con éxito",
                    data: updatedPerson,  // Aquí puedes incluir el objeto actualizado directamente
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