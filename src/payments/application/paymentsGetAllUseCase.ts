import { PaymentRepository } from "../domain/repositories/paymentRepository";

export class PaymentsGetAllUseCase {

    constructor(readonly paymentRepository: PaymentRepository) {}

    async execute(): Promise<any[]> {
        const payments = await this.paymentRepository.getAllPayments();
        return payments;

    }
}

