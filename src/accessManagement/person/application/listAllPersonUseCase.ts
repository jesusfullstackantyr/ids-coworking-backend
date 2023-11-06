import { Person } from "../domain/entities/person";
import { PersonRepository } from "../domain/repositories/personRepository";


export class ListAllPersonUseCase {
    constructor(readonly personRepository: PersonRepository){}

    async getAllPersons(): Promise<Person[]|null> {
        try {
        const persons = await this.personRepository.listAllPersons();
        return persons;
        } catch (error) {
            return null;
        }
    }
}