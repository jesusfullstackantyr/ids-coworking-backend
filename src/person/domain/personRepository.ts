import { Person } from './person';

export interface PersonRepository {
    updatePersonAddress(id: number, id_address: number): Promise<Person | null >;
    listAllPersons(): Promise<Person[] | null> //listo
}