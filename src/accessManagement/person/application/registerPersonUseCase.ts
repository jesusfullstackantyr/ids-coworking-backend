import { Person } from '../domain/person';
import { PersonRepository } from '../domain/personRepository';

export class RegisterPersonUseCase {

    constructor(readonly PersonRepository: PersonRepository) { }

    async run(
        id: number,
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
        
            if (!id || !name || !lastname || !email || !phone || !occupation || !id_address || !id_user) {
                return null;
            }

            const registerPerson = await this.PersonRepository.registerPerson(id, name, lastname, email, phone, occupation, id_address, id_user, status);

            if (registerPerson === null) {
                return null;
            }

            return registerPerson;
        } catch (error) {
            return null;
        }
    }

}