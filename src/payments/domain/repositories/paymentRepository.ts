import { Payment } from "../entities/payments";

export interface PaymentRepository {
    //Cancelar Pago
    //lo unico que se tiene que hacer aqui es cambiar el status
    cancelPayment(paymentId: number, newStatus: string): Promise<Payment | null>;
}