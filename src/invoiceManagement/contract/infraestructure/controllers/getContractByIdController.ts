import { Response, Request } from "express";
import { GetContractByIdUseCase } from "../../application/getContractByIdUseCase";
// import { Contract } from "../../domain/contract";


export class GetContractByIdController {
    constructor(readonly GetContractByIdUseCase: GetContractByIdUseCase){}

    async getContractById(req:Request,res: Response) {
        try {
            const id = Number(req.params.id);
            const getContractById = await this.GetContractByIdUseCase.getContractById(id);
            console.log(id)// Suponiendo que el ID del contrato está en los parámetros de la ruta

            if (getContractById instanceof Error) {
                return res.status(400).send({
                    status: "error",
                    message: getContractById.message,
                });
            }
            console.log(getContractById);

            if (Array.isArray(getContractById) && getContractById.length > 0) {
                return res.status(200).send({
                    status: "success",
                    data: getContractById,
                    message: "Contrato obtenido exitosamente",
                });
            } else {
                return res.status(404).send({
                    status: "not found",
                    message: "Contrato no ha sido encontrado",
                });
            }
            

        } catch (error) {
            console.error("Error al obtener el contrato:", error); // Agregar un registro detallado del error
            return res.status(500).send({
                status: "error",
                message: "An unexpected error occurred. Please try again later.",
            });
        }
    }
}
