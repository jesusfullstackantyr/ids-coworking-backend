import { Request, Response } from 'express';
import { PaymentMethodActiveUseCase } from '../../application/useCases/paymentMethodActiveUseCase';

export class PaymentMethodActiveController {
  constructor(readonly paymentActiveUseCase: PaymentMethodActiveUseCase) {}

  async setActivePayment(request: Request, response: Response) {
    try {
      const { id } = request.body;

      const result = await this.paymentActiveUseCase.execute(id);

      if (result === id) {
        return response.status(200).json({ message: 'Payment has been successfully activated.' });
      } else {
        return response.status(404).json({ message: 'Failed to activate the payment.' });
      }
    } catch (error: any) {
      response.status(500).json({
        message: 'Error while activating the payment',
        error: error.message,
      });
    }
  }
}
