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

    ): Promise< Person | null >
    updatePersonAddress(id: number, id_address: number): Promise<Person | null >;
    listAllPersons(): Promise<Person[] | null> //listo
}