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

    updatePerson(id: number, name: string, lastname: string, phone: string): Promise<Person | null | string>
}