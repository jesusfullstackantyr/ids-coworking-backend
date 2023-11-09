import { PaymentMethod } from "../../domain/entities/paymentsMethod";
import { PaymentRepository } from "../../domain/repositories/paymentMethodRepository";

export class PaymentMethodGetByIdUseCase {

    constructor(readonly paymentRepository: PaymentRepository) {}

    async execute(paymentId: number): Promise<PaymentMethod | null> {        
        const payment = await this.paymentRepository.getPaymentById(paymentId);
        return payment;
    }
}
