import { Request, Response } from "express";
import { validatePersonUseCase } from "../../application/validatePersonUseCase";

export class validatePersonController {

    constructor(readonly validatePersonUseCase: validatePersonUseCase) { }

    async run(req: Request, res: Response) {
        try {
            let {
                id_user
            } = req.params

            let {
                status
            } = req.body

            let updatedPerson = await this.validatePersonUseCase.run(parseInt(id_user), status);
            if (updatedPerson === true) {
                return res.status(201).send({
                    status: "success",
                    message: "Status modificado con éxito",
                });
            } else {
                return res.status(500).send({
                    status: "error",
                    message: "No se encontró o no se pudo actualizar el status",
                });
            }
        } catch (error) {
            console.error("Error update status:", error);
            return res.status(500).send({
                status: "error",
                message: "Error al modificar el status",
            });
        }
    }

}