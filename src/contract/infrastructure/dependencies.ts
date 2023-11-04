import { MariaDBRepository } from "./mariaDBRepository";

import { CreateContractUseCase } from "../application/create_contract_usecase";
import { CancelContractUseCase } from "../application/cancelContractUseCase";

import { CreateContractController } from "./controllers/createContractController";
import { CancelContractController} from "./controllers/cancelContractController";


export const mariaDBRepository = new MariaDBRepository();

//Casos de uso
export const createContractUseCase = new CreateContractUseCase(mariaDBRepository);
export const updateContractUseCase = new CancelContractUseCase(mariaDBRepository);


//Controladores
export const createContractController = new CreateContractController(createContractUseCase);
export const updateContractController = new CancelContractController(updateContractUseCase);