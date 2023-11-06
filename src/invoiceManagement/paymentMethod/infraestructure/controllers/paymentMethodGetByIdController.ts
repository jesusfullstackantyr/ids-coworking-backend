import { Request, Response } from 'express';
import { PaymentMethodGetByIdUseCase } from '../../application/useCases/paymentMethodGetByIdUseCase';

export class PaymentMethodGetByIdController {
  constructor(readonly paymentMethodGetByIdUseCase: PaymentMethodGetByIdUseCase) {}

  async getPaymentBiyd(request: Request, response: Response) {
    
    try {
      const { id } = request.params;
     
      const payment = await this.paymentMethodGetByIdUseCase.execute(Number(id));

      if (payment) {
        return response.status(200).json(payment);
      } else {
        return response.status(404).json({ message: 'metodo de pago no encontrado' });
      }
    } catch (error: any) {
      response.status(500).json({
        message: 'Error while get payment',
        error: error.message, 
      });
    }
  }
}
