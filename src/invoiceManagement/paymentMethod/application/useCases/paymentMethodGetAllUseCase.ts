import { PaymentRepository } from "../../domain/repositories/paymentMethodRepository";

export class PaymentMethodGetAllUseCase {

    constructor(readonly paymentRepository: PaymentRepository) {}

    async execute(): Promise<any[]> {
        const payments = await this.paymentRepository.getAllPayments();
        return payments;

    }
    
}

