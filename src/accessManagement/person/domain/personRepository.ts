import { Person } from './person';

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
    updatePersonAddress(id: number, id_address: number): Promise<Person | null | string>;
    //getPersonById(id: number): Promise<Person | null>
    listAllPersons(): Promise<Person[] | null>
}