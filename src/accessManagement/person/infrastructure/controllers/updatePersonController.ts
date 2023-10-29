import { Request, Response } from "express";
import { UpdatePersonUseCase } from "../../application/updatePersonUseCase";

export class UpdatePersonController {
    /*constructor(readonly updatePersonUseCase: UpdatePersonUseCase) { }

    async run(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { name, lastname, phone } = req.body;

            if (!id || !name || !lastname || !phone) {
                return res.status(400).json({
                    status: "error",
                    message: "Campo(s) faltante(s)",
                });
            }

            const updatedPerson = await this.updatePersonUseCase.run(name, lastname, phone);

            if (updatedPerson) {
                return res.status(200).json({
                    status: "éxito",
                    data: {
                        person: updatedPerson,
                    },
                });
            } else {
                return res.status(404).json({
                    status: "error",
                    message: "No se encontro esa persona",
                });
            }
        } catch (error) {
            console.error("Error al actualizar la persona:", error);

            return res.status(500).json({
                status: "error",
                message: "Error al actualizar la persona",
            });
        }
    }*/

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
                //const updatedPersonNumber = Number(updatedPerson);
                return res.status(201).send({
                    status: "success",
                    message: "Persona actualizada con éxito",
                    data: updatedPerson,

                    // data: updatedPerson,
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