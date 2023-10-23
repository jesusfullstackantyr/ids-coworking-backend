import { Request, Response } from 'express';
import { PaymentsUpdateUseCase } from '../../application/paymentsUpdateUseCase';

export class PaymentsUpdateController {
  constructor(readonly paymentsUpdateUseCase: PaymentsUpdateUseCase) {}

  async updatePayments(request: Request, response: Response) {
    try {
      const { id, amount, payment_date, status, id_user, id_rental } = request.body;
      const updatedPaymentData = {
        amount,
        payment_date,
        status,
        id_user,
        id_rental,
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
