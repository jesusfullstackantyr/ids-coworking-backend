import { Request, Response } from 'express';
import { PaymentMethodInactiveUseCase } from '../../application/paymentMethodInactiveUseCase';

export class PaymentMethodInactiveController {
  constructor(readonly paymentInactiveUseCase: PaymentMethodInactiveUseCase) {}

  async setInactivePayment(request: Request, response: Response) {
    try {
      const { id } = request.body;

      const result = await this.paymentInactiveUseCase.execute(id);

      if (result === id) {
        return response.status(200).json({ message: 'The payment has been successfully deactivated.' });
      } else {
        return response.status(404).json({ message: 'Failed to deactivate the payment.' });
      }
    } catch (error: any) {
      response.status(500).json({
        message: 'Error while deactivating the payment',
        error: error.message,
      });
    }
  }
}
