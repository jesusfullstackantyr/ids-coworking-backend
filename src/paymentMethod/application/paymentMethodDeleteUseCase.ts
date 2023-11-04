import { PaymentRepository } from "../domain/repositories/paymentMethodRepository";

export class PaymentMethodDeleteUseCase {

    constructor(readonly paymentRepository: PaymentRepository) {}

    async execute(paymentId: number): Promise<boolean> {        
        const deleted = await this.paymentRepository.deletePayment(paymentId);

        if (deleted) {
            return true;
        } else {
            return false;
        }
    }
}
