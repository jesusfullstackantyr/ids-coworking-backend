import { Request, Response } from 'express';
import { PaymentMethodDeleteUseCase } from '../../application/useCases/paymentMethodDeleteUseCase';


export class PaymentMethodDeleteController {
  constructor(private paymentsDeleteUseCase: PaymentMethodDeleteUseCase) {}

  async deletePayment(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params; 
      const isDeleted = await this.paymentsDeleteUseCase.execute(Number(id));

      if (isDeleted) {
        res.status(200).json({ message: 'Pago eliminada.' });
      } else {
        res.status(404).json({ error: 'Pago no encontrada o no autorizada para eliminar.' });
      }
    } catch (error) {
      console.error('Error al eliminar el pago:', error);
      res.status(500).json({ error: 'Error al eliminar el pago.' });
    }
  }

}
