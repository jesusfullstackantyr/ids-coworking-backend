import { Request, Response } from 'express';
import { PaymentsGetAllUseCase } from '../../application/paymentsGetAllUseCase';

export class PaymentsGetAllController {
  constructor(readonly paymentsGetAllUseCase: PaymentsGetAllUseCase) {}

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
