export interface PaymentRepository {
    ProcessPayment(
        name:String,
        email:String,
        card_number:String,
        cvv:String,
        expiration_month:String,
        expiration_year:String,
        method: String,
        amount: number,
        description: String,
        device_session_id:String,
        id_contract: number,
        id_payment_method: string,
        id_card: string,
        id_user: string
    ):Promise<JSON | void | Error>
    
}