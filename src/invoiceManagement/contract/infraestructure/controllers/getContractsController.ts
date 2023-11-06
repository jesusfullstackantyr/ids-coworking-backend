import { Response, Request } from "express";
import { GetContractsUseCase } from "../../application/getContractsUseCase";
import { Contract } from "../../domain/entities/contract";


export class GetContractsController {
    constructor(readonly GetContractsUseCase: GetContractsUseCase){}

    async get(req:Request,res: Response) {
        try {

            const getContracts = await this.GetContractsUseCase.get();

            if (getContracts instanceof Error) {
                return res.status(400).send({
                    status: "error",
                    message: getContracts.message,
                });
            }
            if (Array.isArray(getContracts) && getContracts.length > 0) {
                return res.status(200).send({
                    status: "success",
                    data: getContracts,
                    message: "Contratos obtenidos exitosamente",
                });
            } else {
                return res.status(404).send({
                    status: "not found",
                    message: "Sin registros",
                });
            }
    
        } catch (error) {
            console.error("Error al obtener el contrato:", error);
            return res.status(500).send({
                status: "error",
                message: "Ocurrió un error inesperado. Por favor, inténtalo de nuevo más tarde.",
            });
        }
    }
}