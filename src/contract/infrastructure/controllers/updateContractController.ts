import { Response, Request } from "express";
import { UpdateContractUseCase } from "../../application/updateContractUseCase";
import { Contract } from "../../domain/contract";

export class UpdateContractController {
    constructor(private readonly updateContractUseCase: UpdateContractUseCase) {}

    async updateStatus(req: Request, res: Response) {
        try {
            const { status } = req.body;
            const id = Number(req.params.id); 
            console.log(id)// Suponiendo que el ID del contrato está en los parámetros de la ruta

            const updatedContract = await this.updateContractUseCase.Update(status,id);

            if (updatedContract instanceof Error) {
                return res.status(400).send({
                    status: "error",
                    message: updatedContract.message,
                });
            }

    

            if (updatedContract instanceof Contract) {
                return res.status(200).send({
                    status: "success",
                    data: {
                        amount: updatedContract.amount,
                        start_date: updatedContract.start_date,
                        expiration_date: updatedContract.expiration_date,
                        status: updatedContract.status,
                        iduser: updatedContract.iduser,
                        idoffice: updatedContract.idoffice,
                    },
                    message: "Estado del contrato actualizado con éxito",
                });
            } else {
                return res.status(500).send({
                    status: "error",
                    message: "Error al actualizar el estado del contrato",
                });
            }

        } catch (error) {
            console.error("Error al actualizar el estado del contrato:", error);
            return res.status(500).send({
                status: "error",
                message: "Ocurrió un error inesperado. Por favor, inténtalo de nuevo más tarde.",
            });
        }
    }
}
