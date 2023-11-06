import { MariaDBRepository } from "./mariaDBRepository";

import { CreateContractUseCase } from "../application/create_contract_usecase";
<<<<<<< HEAD
import { GetContractByIdUseCase } from "../application/getContractByIdUseCase";
import { CancelContractUseCase } from "../application/cancelContractUseCase";

import { CreateContractController } from "./controllers/createContractController";
import { GetContractByIdController } from "./controllers/getContractByIdController";
import { CancelContractController } from "./controllers/cancelContractController";
=======
import { CancelContractUseCase } from "../application/cancelContractUseCase";

import { CreateContractController } from "./controllers/createContractController";
import { CancelContractController} from "./controllers/cancelContractController";
>>>>>>> origin/201227-Feature-IC-3-Cancelar-Contrato


export const mariaDBRepository = new MariaDBRepository();

//Casos de uso
export const createContractUseCase = new CreateContractUseCase(mariaDBRepository);
<<<<<<< HEAD
export const getContractByIdUseCase = new GetContractByIdUseCase(mariaDBRepository);
export const updateContractUseCase = new CancelContractUseCase(mariaDBRepository);

//Controladores
export const createContractController = new CreateContractController(createContractUseCase);
export const getContractByIdController = new GetContractByIdController(getContractByIdUseCase);
=======
export const updateContractUseCase = new CancelContractUseCase(mariaDBRepository);


//Controladores
export const createContractController = new CreateContractController(createContractUseCase);
>>>>>>> origin/201227-Feature-IC-3-Cancelar-Contrato
export const updateContractController = new CancelContractController(updateContractUseCase);