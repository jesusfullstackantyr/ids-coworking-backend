import { PayableInterface } from "./PayableInterface";

export class OpenPay implements PayableInterface {
    pay(transactionData:object): Promise<any> {
        throw new Error("Method not implemented.");
    }
}