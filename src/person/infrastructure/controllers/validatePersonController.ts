import { Request, Response } from "express";
import { validatePersonUseCase } from "../../application/validatePersonUseCase";

export class addReviewControler {

    constructor(readonly validatePersonUseCase: validatePersonUseCase) { }

    async run(req: Request, res: Response) {
        try {
            let {
                stauts
            } = req.body

            let {
                id_user
            } = req.params

            let updatedPerson = await this.validatePersonUseCase.run(stauts, id_user)

            if (updatedPerson === true) {
                return res.status(201).send({
                    status: "success",
                    message: "Status modifucado con exito",
                });
            }else{
                return res.status(500).send({
                    status: "error",
                    message: "No se encontro o no se puedo actualizar el status",
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