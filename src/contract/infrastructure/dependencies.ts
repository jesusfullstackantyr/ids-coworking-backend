import { MariaDBRepository } from "./mariaDBRepository";

import { CreateContractUseCase } from "../application/create_contract_usecase";
import { CreateContractController } from "./controllers/createContractController";

export const mariaDBRepository = new MariaDBRepository();

//Casos de uso
export const createContractUseCase = new CreateContractUseCase(mariaDBRepository);

//Controladores
export const createContractController = new CreateContractController(createContractUseCase);