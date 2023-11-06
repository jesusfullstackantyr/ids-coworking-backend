import { Address } from '../domain/entities/address';
import { AddressRepository } from '../domain/repositories/addressRepository';

export class UpdateAddressUseCase {
    constructor(readonly AddressRepository: AddressRepository) { }

    async run(
        id: number,
        mainStreet: string, 
        street_1: string, 
        postalCode: number, 
        street_2: string, 
        colonia: string, 
        municipio: string, 
        country: string
        
    ): Promise<Address | null | string> {
        try {
            const update = await this.AddressRepository.updateAddress(id,mainStreet,street_1,postalCode,street_2,colonia,municipio,country);

            return update;
        } catch (error) {
            return null;
        }
    }
}