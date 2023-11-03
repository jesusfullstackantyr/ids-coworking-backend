import { PaymentMethod } from '../../domain/entities/paymentsMethod';
import { PaymentRepository } from '../../domain/repositories/paymentMethodRepository';
import { paymentsValidate } from '../../domain/validators/paymentMethodValidate';

export class PaymentMethodCreateUseCase {

    constructor(readonly paymentRepository:PaymentRepository){}

    async execute(id:number, name:string,status:string,pb_key_prod:string, pd_key_prod:string, pb_key_test:string, pd_key_test:string): Promise<any>  {

        
        let payment = new PaymentMethod(
            id,
            name,
            status,
            pb_key_prod,
            pd_key_prod,
            pb_key_test,
            pd_key_test,
        );

        let paymentValidate = new paymentsValidate(payment);
        
        await paymentValidate.invalidIfHasErrors();

        let createdPayments = await this.paymentRepository.createPayments(payment);

        return createdPayments;

    }

}