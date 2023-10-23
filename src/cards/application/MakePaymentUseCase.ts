
import { v4 as uuidv4 } from 'uuid';
import { CardRepository } from '../domain/repositories/cardRepository';


export class MakePaymentUseCase {
    constructor(readonly cardRepository: CardRepository) {}


    async run(
        name:String,
        email:String,
        card_number:String,
        cvv:String,
        expiration_month:String,
        expiration_year:String,
        amount: number,
        description: string,
    ): Promise<JSON | void | Error> {
        
        const fullUuid = uuidv4();
        const device_session_id = fullUuid.substring(0, 8) + fullUuid.substring(9, 13) + fullUuid.substring(14, 18) + fullUuid.substring(19, 23) + fullUuid.substring(24, 36);
       

        const method = 'card'
        try {
            const payment = await this.cardRepository.ProcessPayment(
                name,
                email,
                card_number,
                cvv,
                expiration_month,
                expiration_year,
                method,
                amount,
                description,
                device_session_id,
                )
            return payment 
        } catch (error) {
           return error as Error 
        }
    }



}