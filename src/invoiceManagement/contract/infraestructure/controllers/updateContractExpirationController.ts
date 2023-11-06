import { Response, Request } from "express";
import { UpdateContractExpirationUseCase } from "../../application/updateContractExpirationUseCase";
// import { Contract } from "../../domain/contract";
// import moment from "moment";

export class UpdateContractExpirationController {
    constructor(private readonly UpdateContractExpirationUseCase: UpdateContractExpirationUseCase) {}

    async UpdateExpiration(req: Request, res: Response) {
        try {
            const expiration_date  = req.body.expiration_date
            const id = Number(req.params.id); 
            
            console.log(id)// ID del contrato 

            const UpdateContractExpiration = await this.UpdateContractExpirationUseCase.updateContractExpiration(expiration_date,id);

            if (UpdateContractExpiration instanceof Error) {
                return res.status(400).send({
                    status: "error",
                    message: UpdateContractExpiration.message,
                });
            }

            if (UpdateContractExpiration) {
                return res.status(200).send({
                    status: "success",
                    data: {
                        UpdateContractExpiration
                    },
                    message: "La expiracion del contrato se ha actualizado correctamente",
                });
            } else {
                return res.status(500).send({
                    status: "error",
                    message: "Error al actualizar expiracion de contrato",
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
