import { Payment } from "../domain/entities/payments";
import { PaymentRepository } from "../domain/repositories/paymentRepository";

export class CancelPaymentUseCase {
    constructor(readonly paymentRepository: PaymentRepository) {}

    async cancelPayment(paymentId: number, newStatus: string): Promise<Payment | null> {
        // Realizar validaciones si es necesario

        // Llamar al método del repositorio para cancelar el pago
        try {
            const updatedPayment = await this.paymentRepository.cancelPayment(paymentId, newStatus);
            return updatedPayment;
        } catch (error) {
            // Manejar errores, por ejemplo, registrarlos o lanzar excepciones personalizadas
            return null;
        }
    }
}