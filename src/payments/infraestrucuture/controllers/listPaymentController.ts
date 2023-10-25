import { Request, Response } from "express";
import { ListAllPaymentUseCase } from "../../application/listAllPaymentsUseCase";

export class PaymentsContoller {
    constructor(
        readonly listAllPaymentUseCase :ListAllPaymentUseCase,
    ){}

    async listAllPayments(req: Request, res: Response) {
        try {
          const payments = await this.listAllPaymentUseCase.getAllPayments();
          
          if (payments && payments.length > 0) {
            return res.status(200).json({
              status: 'success',
              data: payments,
              message: 'Lista de pagos obtenida exitosamente',
            });
          }
    
          return res.status(404).json({
            status: 'error',
            message: 'No se encontraron pagos',
          });
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
            return res.status(500).send({
              status: "error",
              message: "An error occurred."
            });
      }
      }

} 