import { Person } from '../entities/person';

export interface PersonRepository {
    
    registerPerson(
        name: string,
        lastname: string,
        email: string,
        phone: string,
        occupation: string,
        id_address: number,
        id_user: number,
        status: string,

    ): Promise< Person | null | Error >

    updatePerson(id: number, name: string, lastname: string, phone: string): Promise<Person | null | string>

    validatePerson(
        id_user: Number,
        status: string
    ): Promise< boolean | null | Error >
    updatePersonAddress(id: number, id_address: number): Promise<Person | null | string>
    listAllPersons(): Promise<Person[] | null>
}