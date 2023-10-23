import { Payment } from '../domain/entities/payments';
import { PaymentRepository } from '../domain/repositories/paymentRepository';
import { paymentsValidate } from '../domain/validators/paymentsValidate';

export class CreatePaymentsUseCase {

    constructor(readonly paymentRepository:PaymentRepository){}

    async execute(id: number, amount: number, payment_date: string, status: string, id_user:number, id_rental:number ): Promise<any>  {

        
        let payment = new Payment(
            id,
            amount,
            payment_date,
            status,
            id_user,
            id_rental,
        );

        let paymentValidate = new paymentsValidate(payment);
        
        await paymentValidate.invalidIfHasErrors();

        let createdPayments = await this.paymentRepository.createPayments(payment);

        return createdPayments;

    }

}