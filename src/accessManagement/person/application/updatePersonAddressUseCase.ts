import { Person } from "../domain/person";
import { PersonRepository} from "../domain/personRepository";


export class UpdatePersonAddressUseCase  {
    constructor(readonly PersonRepository: PersonRepository) { }

    async run(
        id: number,
        id_address: number
        
    ): Promise<Person | null | string> {
        try {
            const update = await this.PersonRepository.updatePersonAddress(id, id_address);

            return update;
        } catch (error) {
            return null;
        }
    }
}
