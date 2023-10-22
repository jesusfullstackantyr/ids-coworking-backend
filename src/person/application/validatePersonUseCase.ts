import { Person } from '../domain/person';
import { PersonRepository } from '../domain/personRepository';

export class validatePersonUseCase {

    constructor(readonly PersonRepository: PersonRepository) { }

    async run(
        id_user: number,
    ): Promise<boolean | null | Error> {
        try {
            console.log('id_user', id_user)
            if (!id_user) {
                return null;
            }

            const validatePerson = await this.PersonRepository.validatePerson(id_user);
            console.log('validatePerson', validatePerson)
            if (validatePerson === null) {
                return null;
            }

            return validatePerson;
        } catch (error) {
            return null;
        }
    }

}