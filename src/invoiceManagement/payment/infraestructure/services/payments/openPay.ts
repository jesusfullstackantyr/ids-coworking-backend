import { PayableInterface } from "./PayableInterface";

export class OpenPay implements PayableInterface {

    publicKey:any;
    privateKey:any;
    constructor() {
    }

    setCredentials(pkey: String, privateKey: String, isLive: Boolean) {
        this.publicKey = pkey;
        this.privateKey = privateKey;
    }

    pay(transactionData:object): Promise<any> {
        OPENPAY(this.publicKey,this.privateKey,false);
    }
}