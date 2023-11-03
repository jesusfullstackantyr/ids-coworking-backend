import { Request, Response } from 'express';
import { PaymentMethodGetAllUseCase } from '../../application/useCases/paymentMethodGetAllUseCase';

export class PaymentMethodGetAllController {
  constructor(readonly paymentsGetAllUseCase: PaymentMethodGetAllUseCase) {}

  async getAllPayments(request: Request, response: Response) {
    try {
      const payments = await this.paymentsGetAllUseCase.execute();

      return response.status(200)
        .json(payments);
    } catch (error: any) {
      response.status(error.http_status ?? 500)
        .json({
          message: "Error while getting payments",
          error: error
        });
    }
  }
}
