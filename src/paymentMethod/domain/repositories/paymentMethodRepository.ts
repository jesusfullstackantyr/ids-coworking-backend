import { PaymentMethod } from "../entities/paymentsMethod";

export interface PaymentRepository {
    createPayments(credentials:PaymentMethod):Promise<PaymentMethod|null>;
    getAllPayments(): Promise<PaymentMethod[]>;
    updatePayment(id: number, updatedPaymentData: PaymentMethod): Promise<PaymentMethod | null>;
    deletePayment(id: number): Promise<boolean>;
    getPaymentById(id:number): Promise<PaymentMethod | null>
    getPaymentById(id:number): Promise<PaymentMethod | null>
    setInactivePayment(id: number, status: string): Promise<number | string | void >;
    setActivePayment(id: number, status: string): Promise<number | string | void >;
}

    




