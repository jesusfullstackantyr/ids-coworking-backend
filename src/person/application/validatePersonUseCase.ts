import { Person } from '../domain/person';
import { PersonRepository } from '../domain/personRepository';

export class validatePersonUseCase {

    constructor(readonly PersonRepository: PersonRepository) { }

    async run(
        id_user: number,
        status: string
    ): Promise<boolean | null | Error> {
        try {
            if (!id_user || !status) {
                return null;
            }

            const validatePerson = await this.PersonRepository.validatePerson(id_user , status);
            if (validatePerson === null) {
                return null;
            }

            return validatePerson;
        } catch (error) {
            return null;
        }
    }

}