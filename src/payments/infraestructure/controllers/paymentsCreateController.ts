import { Request, Response } from 'express'; 
import { CreatePaymentsUseCase } from '../../application/paymentsUseCase';

export class PaymentsCreateController {
  constructor(readonly createPaymentsUseCase: CreatePaymentsUseCase) {}

  async createPayments(request: Request, response: Response) {
    try {
      let {id, amount, payment_date, status, id_user, id_rental } = request.body;
      let payment = await this.createPaymentsUseCase.execute(id, amount, payment_date, status, id_user, id_rental);

      return response.status(200)
        .json(payment);
    } catch (error: any) {
      response.status(error.http_status ?? 500)
        .json({
          message: "Error while creating payment",
          error: error
        });
    }
  }
}
