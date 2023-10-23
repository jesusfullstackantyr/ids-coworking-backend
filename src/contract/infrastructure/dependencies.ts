import { MariaDBRepository } from "./mariaDBRepository";

import { CreateContractUseCase } from "../application/create_contract_usecase";
import { UpdateContractUseCase } from "../application/updateContractUseCase";

import { CreateContractController } from "./controllers/createContractController";
import { UpdateContractController} from "./controllers/updateContractController";


export const mariaDBRepository = new MariaDBRepository();

//Casos de uso
export const createContractUseCase = new CreateContractUseCase(mariaDBRepository);
export const updateContractUseCase = new UpdateContractUseCase(mariaDBRepository);


//Controladores
export const createContractController = new CreateContractController(createContractUseCase);
export const updateContractController = new UpdateContractController(updateContractUseCase);