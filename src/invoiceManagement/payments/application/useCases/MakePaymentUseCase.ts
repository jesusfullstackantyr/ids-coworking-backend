
import { v4 as uuidv4 } from 'uuid';
import { PaymentRepository } from '../../domain/repositories/paymentRepository';

export class MakePaymentUseCase {
    constructor(readonly paymentRepository: PaymentRepository) {}
    async run(
        name:String,
        email:String,
        phone:string,
        card_number:String,
        cvv:String,
        expiration_month:String,
        expiration_year:String,
        amount: number,
        description: String,
        id_contract: number,
        id_card: string,
        id_user: string,
        dataPay: any,
    ): Promise<JSON | void | Error> {
        
        const fullUuid = uuidv4();
        const device_session_id = fullUuid.substring(0, 8) + fullUuid.substring(9, 13) + fullUuid.substring(14, 18) + fullUuid.substring(19, 23) + fullUuid.substring(24, 36);
        const id_payment_method = "2"
        const method = 'card'
        try {
            const payment = await this.paymentRepository.ProcessPayment(
                name,
                email,
                phone,
                card_number,
                cvv,
                expiration_month,
                expiration_year,
                method,
                amount,
                description,
                device_session_id,
                id_contract,
                id_payment_method,
                id_card,
                id_user,
                dataPay
                )
            return payment 
        } catch (error) {
           return error as Error 
        }
    }



}