import { Payment } from "../domain/entities/payments";
import { PaymentRepository } from "../domain/repositories/paymentRepository";

export class ListAllPaymentUseCase{
    constructor(readonly paymentRepository: PaymentRepository ){}
    async getAllPayments(): Promise<Payment[]> {
        try {
        const payments = await this.paymentRepository.listAllPayments();
        return payments || [];
        } catch (error) {
            return []
        }
    }
}