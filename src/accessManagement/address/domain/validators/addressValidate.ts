import { validate, ValidationError } from "class-validator";
import { Address } from "../entities/address";

export class AddressValidate {
    public address: Address;

    constructor(address: Address) {
        this.address = address;
    }

    public async validate() {
        try {
            await validate(this.address);
        } catch (errors) {
            if (errors instanceof Array) {
                const validationErrors: any[] = errors.map((error: ValidationError) => {
                    let property = error.property;
                    let errorMessages = Object.values(error.constraints || {});
                    return {
                        property,
                        errorMessages
                    };
                });

                throw {
                    http_status: 422,
                    validations: validationErrors
                };
            }
        }
    }
}
