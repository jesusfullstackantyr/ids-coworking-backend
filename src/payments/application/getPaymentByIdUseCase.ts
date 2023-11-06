import { PaymentRepository } from "../domain/repositories/paymentRepository";
import { validate } from "class-validator";
import { ValidationId } from "../domain/validation/validationPayment";
import { Payment } from "../../NewPaypal/domain/entities/payments";

export class GetPaymentByIdUseCase {
    constructor(readonly paymentRepository: PaymentRepository) { }

    async getById(id: number): Promise<Payment | null> {

        const validationGetID = new ValidationId(id);
        const validationPayment = await validate(validationGetID);

        if (validationPayment.length > 0) {
            throw new Error(JSON.stringify(validationPayment));
        }

        try {
            const category = await this.paymentRepository.getPaymentById(id);
            return category;
        } catch (error) {
            return null;
        }
    }
}