import { Response, Request } from "express";
import { CancelContractUseCase } from "../../application/cancelContractUseCase";
import { Contract } from "../../domain/contract";

export class CancelContractController {
    constructor(private readonly CancelContractUseCase: CancelContractUseCase) {}

    async CancelStatus(req: Request, res: Response) {
        try {
            const status  = "Cancelado";
            const id = Number(req.params.id); 
            console.log(id)// Suponiendo que el ID del contrato está en los parámetros de la ruta

            const CancelContract = await this.CancelContractUseCase.Cancel(status,id);

            if (CancelContract instanceof Error) {
                return res.status(400).send({
                    status: "error",
                    message: CancelContract.message,
                });
            }

    

            if (CancelContract instanceof Contract) {
                return res.status(200).send({
                    status: "success",
                    data: {
                        amount: CancelContract.amount,
                        start_date: CancelContract.start_date,
                        expiration_date: CancelContract.expiration_date,
                        status: CancelContract.status,
                        iduser: CancelContract.iduser,
                        idoffice: CancelContract.idoffice,
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
