import { PaymentMethod } from "../../domain/entities/paymentsMethod";
import { PaymentRepository } from "../../domain/repositories/paymentMethodRepository";
import { paymentsValidate } from "../../domain/validators/paymentMethodValidate";


export class PaymentMethodUpdateUseCase {

    constructor(readonly paymentRepository: PaymentRepository) {}

    async execute(id: number, updatedData: any): Promise<any> {
        const updatedPayment = new PaymentMethod(
            id,
            updatedData.name,
            updatedData.status,
            updatedData.pb_key_prod,
            updatedData.pd_key_prod,
            updatedData.pb_key_test,
            updatedData.pd_key_test,
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
