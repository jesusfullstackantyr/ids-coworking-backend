import { MariaDBRepository } from "./repositories/mariaDBRepository";

import { CreateContractUseCase } from "../application/create_contract_usecase";
import { CancelContractUseCase } from "../application/cancelContractUseCase";
import { GetContractsUseCase } from "../application/getContractsUseCase";
import { UpdateContractExpirationUseCase } from "../application/updateContractExpirationUseCase";
import { GetContractByIdUseCase } from "../application/getContractByIdUseCase";


import { CreateContractController } from "./controllers/createContractController";
import { CancelContractController} from "./controllers/cancelContractController";
import { GetContractsController} from "./controllers/getContractsController";
import { UpdateContractExpirationController } from "./controllers/updateContractExpirationController";
import { GetContractByIdController } from "./controllers/getContractByIdController";



export const mariaDBRepository = new MariaDBRepository();

//Casos de uso
export const createContractUseCase = new CreateContractUseCase(mariaDBRepository);
export const updateContractUseCase = new CancelContractUseCase(mariaDBRepository);
export const getContractsUseCase = new GetContractsUseCase(mariaDBRepository);
export const updateContractExpirationUseCase = new UpdateContractExpirationUseCase(mariaDBRepository);
export const getContractByIdUseCase = new GetContractByIdUseCase(mariaDBRepository);



//Controladores
export const createContractController = new CreateContractController(createContractUseCase);
export const updateContractController = new CancelContractController(updateContractUseCase);
export const getContractsController = new GetContractsController(getContractsUseCase);
export const updateContractExpirationController = new UpdateContractExpirationController(updateContractExpirationUseCase);
export const getContractByIdController = new GetContractByIdController(getContractByIdUseCase);

