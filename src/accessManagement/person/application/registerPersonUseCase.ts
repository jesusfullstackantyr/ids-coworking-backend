import { Person } from '../domain/entities/person';
import { PersonRepository } from '../domain/repositories/personRepository';
import { PersonValidate } from '../domain/validators/personValidate';

export class RegisterPersonUseCase {

    constructor(readonly PersonRepository: PersonRepository) { }

    async run(
        name: string,
        lastname: string,
        email: string,
        phone: string,
        occupation: string,
        id_address: number,
        id_user: number,
        status: string,
        
    ): Promise < Person | null | number | Error > {
        try {
        
            if (!name || !lastname || !email || !phone || !occupation || !id_address || !id_user) {
                return null;
            }

            const person = new Person(name, lastname, email, phone, occupation, id_address, id_user, status);
            const personValidator = new PersonValidate(person);
            await personValidator.validate();

            const registerPerson = await this.PersonRepository.registerPerson(name, lastname, email, phone, occupation, id_address, id_user, status);

            if (registerPerson === null) {
                return null;
            }

            return registerPerson;
        } catch (error) {
            return null;
        }
    }
}