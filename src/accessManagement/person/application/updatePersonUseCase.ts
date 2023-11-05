import { Person } from '../domain/entities/person';
import { PersonRepository } from '../domain/repositories/personRepository';
//import { personValidator } from '../domain/validators/personValidate';

export class UpdatePersonUseCase {
    constructor(readonly PersonRepository: PersonRepository) { }

    async run(
        id: number,
        name: string,
        lastname: string,
        phone: string
        
    ): Promise<Person | null | string> {
        try {
            const update = await this.PersonRepository.updatePerson(id, name, lastname, phone);

            return update;
        } catch (error) {
            return null;
        }
    }
}