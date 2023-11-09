import { Address } from '../entities/address';

export interface AddressRepository {
    registerAddress(
        mainStreet: string,
        street_1: string,
        postalCode: number,
        street_2: string,
        colonia: string,
        municipio: string,
        country: string,

    ): Promise< Address | Error | null>
    
    listAllAddress(): Promise<Address[] | null>
    updateAddress(id: number,mainStreet: string, street_1: string, postalCode: number, street_2: string, colonia: string, municipio: string, country: string): Promise<Address | null | string>
}