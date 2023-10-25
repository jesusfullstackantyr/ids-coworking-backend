import { PayableInterface } from "./PayableInterface";

export class Paypal implements PayableInterface {
    pay(transactionData:object): Promise<any> {
        throw new Error("Method not implemented.");
    }
}