import { validate } from 'class-validator';
import { Address } from '../domain/entities/address';
import { AddressRepository } from '../domain/repositories/addressRepository';

export class RegisterAddressUseCase {

    constructor(readonly AddressRepository: AddressRepository) { }

    async run(
        mainStreet: string,
        street_1: string,
        postalCode: number,
        street_2: string,
        colonia: string,
        municipio: string,
        country: string,
        
    ): Promise < Address | Error | null> {
        try {
        
            if (!mainStreet || !street_1 || !postalCode || !street_2 || !colonia || !municipio || !country) {
                return null;
            }

            const registerAddress = await this.AddressRepository.registerAddress(mainStreet, street_1, postalCode, street_2, colonia, municipio, country);
              
            if (registerAddress === null) {
                return null;
            }
            return registerAddress;
        } catch (error) {
            return null;
        }
    }

}