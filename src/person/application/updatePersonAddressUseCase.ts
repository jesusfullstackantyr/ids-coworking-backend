import { Person } from "../domain/person";
import { PersonRepository} from "../domain/personRepository";

export class UpdatePersonAddressUseCase {
    constructor(readonly PersonRepository: PersonRepository) { }

    async run(
        id: number,
        id_address: number
    ): Promise<Person | null | Error> {
        try {
            if (!id || !id_address) {
                return null;
            }
            const updatePersonAddress = await this.PersonRepository.updatePersonAddress(id , id_address);
            if (updatePersonAddress === null) {
                return null;
            }
            return updatePersonAddress;
        } catch (error) {
            return null;
        }
    }
}