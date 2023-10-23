import { Payment } from '../domain/entities/payments';
import { PaymentRepository } from '../domain/repositories/paymentRepository';
import { paymentsValidate } from '../domain/validators/paymentsValidate';

export class PaymentsUpdateUseCase {

    constructor(readonly paymentRepository: PaymentRepository) {}

    async execute(id: number, updatedData: any): Promise<any> {
        const updatedPayment = new Payment(
            id,
            updatedData.amount,
            updatedData.payment_date,
            updatedData.status,
            updatedData.id_user,
            updatedData.id_rental,
        );

        const paymentValidate = new paymentsValidate(updatedPayment);
        await paymentValidate.invalidIfHasErrors();

        const updatedPaymentResult = await this.paymentRepository.updatePayment(id, updatedPayment);

        if (!updatedPaymentResult) {
            throw new Error(`No se pudo actualizar el pago con el ID ${id}.`);
        }

        return updatedPaymentResult;
    }
}
