import { GetContractByIdUseCase } from "../../application/getContractByIdUseCase";
import { Response, Request } from "express";

export class GetContractByIdController {
    constructor(readonly getContractByIdUseCase: GetContractByIdUseCase) { }

    async getById(req: Request, res: Response) {
        const contractId = parseInt(req.params.id);

        try {
            const contract = await this.getContractByIdUseCase.getById(contractId);
            if (contract) {
                return res.status(200).json({
                    status: "success",
                    data: contract,
                    message: "Contrato obtenido exitosamente",
                });
            } else {
                return res.status(404).json({
                    status: "error",
                    data: null,
                    message: "No se encontró el contrato con el ID proporcionado",
                });
            }
        } catch (error) {
            if (error instanceof Error) {

                if (error.message.startsWith('[')) {

                    return res.status(400).send({
                        status: "error",
                        message: "Validation failed",
                        errors: JSON.parse(error.message)
                    });
                }
            }
            return res.status(500).json({
                status: "error",
                data: null,
                message: "Error al obtener el contrato",
            });
        }
    }
}
