import { Request, Response } from 'express';
import { PaymentMethodUpdateUseCase } from '../../application/paymentMethodUpdateUseCase';

export class PaymentMethodUpdateController {
  constructor(readonly paymentsUpdateUseCase: PaymentMethodUpdateUseCase) {}

  async updatePayments(request: Request, response: Response) {
    try {
      const { id, name, status, pb_key_prod, pd_key_prod, pb_key_test, pd_key_test } = request.body;
      const updatedPaymentData = {
        id, name, status, pb_key_prod, pd_key_prod, pb_key_test, pd_key_test
      };

    
      const updatedPayment = await this.paymentsUpdateUseCase.execute(id, updatedPaymentData);

      if (updatedPayment) {
        return response.status(200).json(updatedPayment);
      } else {
        return response.status(404).json({ message: 'El pago no se encontró para actualizar.' });
      }
    } catch (error: any) {
      response.status(500).json({
        message: 'Error while updating payment',
        error: error.message, 
      });
    }
  }
}
