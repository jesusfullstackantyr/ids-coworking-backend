import { PaymentRepository } from '../domain/repositories/paymentMethodRepository';

export class PaymentMethodInactiveUseCase {
  constructor(readonly paymentRepository: PaymentRepository) {}

  async execute(id: number): Promise<number | string> {
    try {
      const updatedPaymentResult = await this.paymentRepository.setInactivePayment(id, 'inactive');

      if (typeof updatedPaymentResult === 'number') {
        return updatedPaymentResult; // Devolver la ID del pago inactivado
      } else {
        return 'Failed to deactivate the payment';
      }
    } catch (error) {
      throw new Error('Error deactivating the payment: ' + error);
    }
  }
}
