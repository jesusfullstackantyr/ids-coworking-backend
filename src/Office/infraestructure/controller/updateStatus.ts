import { Request, Response } from "express";
import { UpdateStatus } from "../../appliaction/updateStatusUseCase";
import { HTTPStatusCodes } from "../../domain/validation/HTTPStatusCodes";

export class UpdateStatusController {
    constructor(private updateStatus: UpdateStatus) {}

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const { id, status } = req.body;
            const updateStatus= await this.updateStatus.run(id,status);
            if (updateStatus) {
                return res.status(201).send({
                    status: "success",
                    data: {
                        new_Book: updateStatus
                    }
                });
            } else {
                throw new Error("Ocurrió un error al actualizar, oficina no encontrada ");
            }
        } catch (error) {
            let errorMessage = "Ocurrió un error desconocido.";
            let errors;

            if (error instanceof Error) {
                if (error.message.startsWith('[')) {
                    errorMessage = "La validación falló";
                    errors = JSON.parse(error.message);
                } else {
                    errorMessage = error.message;
                    
                }
            }

            return res.status(500).send({
                status: "error",
                message: errorMessage,
                errors: errors
            });
        }
    }
}
