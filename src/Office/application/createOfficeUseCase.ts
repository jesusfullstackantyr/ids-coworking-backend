import { Office } from "../domain/office";
import { OfficeRepository } from "../domain/officeRepository";

export class CreateOfficeUseCase {
    constructor(private officeRepository: OfficeRepository) {}  // Inyectas el repositorio

    async execute(office: Office): Promise<void> {
        // Implementas la lógica del caso de uso aquí
        await this.officeRepository.create(office);
    }
}
