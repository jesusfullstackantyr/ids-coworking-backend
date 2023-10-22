import { Card } from "../entities/cards";

export interface CardRepository {
    ProcessPayment(
        name:String,
        email:String,
        card_number:String,
        cvv:String,
        expiration_month:String,
        expiration_year:String,
        method: string,
        amount: number,
        description: string,
        device_session_id:String,
    ):Promise<JSON | void | Error>

      
}