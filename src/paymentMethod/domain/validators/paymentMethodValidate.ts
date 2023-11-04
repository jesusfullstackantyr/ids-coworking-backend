import { validate } from "class-validator";
import { PaymentMethod } from "../entities/paymentsMethod";

export class paymentsValidate {

    public payment:PaymentMethod;
    public listErrors:any[];

    constructor(payment:PaymentMethod) {
        this.payment = payment;
        this.listErrors = [];
    }

    public async invalidIfHasErrors() {
        await this.validate();

        if (!this.foundedErrors()){
            return;
        }

        throw({
            http_status:422,
            validations:this.errors()
        })
    }

    protected async validate() {
        this.listErrors = await validate(this.payment);
    }

    protected errors():any[] {
        return this.listErrors.map((error) => {
            let property = error.property;
            let errorMessages = Object.values(error.constraints);
            return {
                property,
                errorMessages
            }
        });
    }

    protected foundedErrors():boolean {
        return this.listErrors.length > 0;
    }

}