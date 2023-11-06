import { validate, ValidationError } from "class-validator";
import { Person } from "../entities/person";

export class PersonValidate {
    public person: Person;

    constructor(person: Person) {
        this.person = person;
    }

    public async validate() {
        try {
            await validate(this.person);
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