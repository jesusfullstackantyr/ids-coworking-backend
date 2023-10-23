import { Person } from '../domain/person';
import { PersonRepository } from '../domain/personRepository';

export class disapprovedPersonUseCase {

    constructor(readonly PersonRepository: PersonRepository) { }

    async run(
        id_user: number,
    ): Promise<boolean | null | Error> {
        try {
            console.log('id_user', id_user)
            if (!id_user) {
                return null;
            }
            const validatePerson = await this.PersonRepository.disapprovedPerson(id_user);
            if (validatePerson === null) {
                return null;
            }

            return validatePerson;
        } catch (error) {
            return null;
        }
    }

}