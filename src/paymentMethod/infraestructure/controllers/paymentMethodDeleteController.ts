import { Request, Response } from 'express';
import { PaymentMethodDeleteUseCase } from '../../application/paymentMethodDeleteUseCase';


export class PaymentMethodDeleteController {
  constructor(private paymentsDeleteUseCase: PaymentMethodDeleteUseCase) {}

  async deletePayment(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params; 
      const isDeleted = await this.paymentsDeleteUseCase.execute(Number(id));

      if (isDeleted) {
        res.status(200).json({ message: 'Payment deleted.' });
      } else {
        res.status(404).json({ error: 'Payment not found or not authorized for deletion.' });
      }
    } catch (error) {
      console.error('Error while deleting the payment:', error);
      res.status(500).json({ error: 'Error while deleting the payment.' });
    }
  }

}
