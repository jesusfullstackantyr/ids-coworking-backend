import { Request, Response } from 'express'; 
import { PaymentMethodCreateUseCase } from '../../application/paymentMethodCreateUseCase';

export class PaymentMethodCreateController {
  constructor(readonly createPaymentsUseCase: PaymentMethodCreateUseCase) {}

  async createPayments(request: Request, response: Response) {
    try {
      let {id, name, status, pb_key_prod, pd_key_prod, pb_key_test, pd_key_test } = request.body;
      let payment = await this.createPaymentsUseCase.execute(id, name, status, pb_key_prod, pd_key_prod, pb_key_test, pd_key_test);

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

