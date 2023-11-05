import { Address } from "../domain/entities/address";
import { AddressRepository } from "../domain/repositories/addressRepository";


export class ListAllAddressUseCase {
    constructor(readonly addressRepository: AddressRepository){}

    async getAllAddress(): Promise<Address[]|null> {
        try {
        const address = await this.addressRepository.listAllAddress();
        return address;
        } catch (error) {
            return null;
        }
    }
}