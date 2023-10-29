import { Person } from '../domain/person';
import { PersonRepository } from '../domain/personRepository';

export class UpdatePersonUseCase {
    constructor(readonly PersonRepository: PersonRepository) { }

    async run(
        id: number,
        name: string,
        lastname: string,
        phone: string
        
    ): Promise<Person | null | string> {
        try {
            const uptade = await this.PersonRepository.updatePerson(id, name, lastname, phone);

            return uptade;
        } catch (error) {
            return null;
        }
    }
}