import { Person } from '../entities/person';

export interface PersonRepository {
    validatePerson(
        id_user: Number,
        status: string
    ): Promise< boolean | null | Error >

}