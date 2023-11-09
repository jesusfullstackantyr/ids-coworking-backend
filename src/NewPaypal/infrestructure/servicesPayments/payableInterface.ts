export interface PayableInterface {
    pay(transactionData:object):Promise<any|null>;
    setCredentials(publicKey:String,privateKey:String,isLive:Boolean):any;
}