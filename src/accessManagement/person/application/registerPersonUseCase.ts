import { Person } from '../domain/person';
import { PersonRepository } from '../domain/personRepository';

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