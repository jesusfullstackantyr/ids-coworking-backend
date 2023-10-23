import { Person } from './person';

export interface PersonRepository {
    registerPerson(
        name: string,
        lastname: string,
        email: string,
        phone: number,
        occupation: string,
        id_address: number,
        id_user: number,
        status: string,
    ): Promise< Person | null | Error >

    validatePerson(
        id_user: number,
    ): Promise< boolean | null | Error >

    disapprovedPerson(
        id_user: number,
    ): Promise< boolean | null | Error >
}