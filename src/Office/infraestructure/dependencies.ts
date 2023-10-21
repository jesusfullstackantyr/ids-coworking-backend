import { MariaDBRepository } from "./mariaDBRepository";
import { CreateOfficeUseCase } from "../application/createOfficeUseCase";
import { CreateOfficeController } from "./controller/createOfficeController";

export const mariaDBRepository = new MariaDBRepository();
export const createOfficeUseCase = new CreateOfficeUseCase(mariaDBRepository);
export const createOfficeController = new CreateOfficeController(createOfficeUseCase);
