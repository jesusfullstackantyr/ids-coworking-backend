import { GetPaymentByIdUseCase } from "../../application/getPaymentByIdUseCase";
import { Response, Request } from "express";

export class GetPaymentByIdController {
    constructor(readonly getPaymentByIdUseCase: GetPaymentByIdUseCase) { }

    async getPaymentById(req: Request, res: Response) {
        const paymentId = parseInt(req.params.id);

        try {
            const payment = await this.getPaymentByIdUseCase.getById(paymentId);
            if (payment) {
                return res.status(200).json({
                    status: "success",
                    data: payment,
                    message: "Pago obtenido exitosamente",
                });
            } else {
                return res.status(404).json({
                    status: "error",
                    data: null,
                    message: "No se encontró el pago con el ID proporcionado",
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
                message: "Error al obtener el pago",
            });
        }
    }
}