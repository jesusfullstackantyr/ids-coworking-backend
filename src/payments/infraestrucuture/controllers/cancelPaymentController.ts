import { Request, Response } from "express";
import { CancelPaymentUseCase } from "../../application/cancelPaymentUseCase";

export class CancelPaymentController {
    constructor(readonly cancelPaymentUseCase: CancelPaymentUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const { paymentId, newStatus } = req.body;

            const canceledPayment = await this.cancelPaymentUseCase.cancelPayment(paymentId, newStatus);

            if (canceledPayment) {
                this.sendSuccessResponse(res, canceledPayment);
            } else {
                this.sendErrorResponse(res, "No se pudo cancelar el pago", 404);
            }
        } catch (error) {
            if (error instanceof Error && error.message.startsWith('[')) {
                this.sendValidationErrorResponse(res, error.message);
            } else {
                this.sendErrorResponse(res, "An error occurred while canceling the payment.", 500);
            }
        }
    }

    private sendSuccessResponse(res: Response, data: any) {
        this.sendResponse(res, 200, "success", { canceledPayment: data });
    }

    private sendErrorResponse(res: Response, message: string, statusCode: number) {
        this.sendResponse(res, statusCode, "error", { message });
    }

    private sendValidationErrorResponse(res: Response, errorMessage: string) {
        const errors = JSON.parse(errorMessage);
        this.sendResponse(res, 400, "error", { message: "Error of validations", errors });
    }

    private sendResponse(res: Response, statusCode: number, status: string, responseData: any) {
        res.status(statusCode).send({
            status,
            data: responseData
        });
    }
}