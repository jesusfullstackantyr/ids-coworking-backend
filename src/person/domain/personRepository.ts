import { Person } from './person';

export interface PersonRepository {
<<<<<<< HEAD
    
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
    
=======
    updatePersonAddress(id: number, id_address: number): Promise<Person | null >;
    listAllPersons(): Promise<Person[] | null> //listo
>>>>>>> eb33269aad852f9d8c41ad3af7075e180e2f12f5
}