import { PaymentRepository } from '../domain/repositories/paymentMethodRepository';

export class PaymentMethodActiveUseCase {
  constructor(readonly paymentRepository: PaymentRepository) {}

  async execute(id: number): Promise<number | string> {
    try {
      const updatedPaymentResult = await this.paymentRepository.setActivePayment(id, 'active');

      if (typeof updatedPaymentResult === 'number') {
        return updatedPaymentResult; // Devolver la ID del pago activado
      } else {
        return 'Failed to activate the payment';
      }
    } catch (error) {
      throw new Error('Error activating the payment: ' + error);
    }
  }
}
