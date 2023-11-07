// import { MariaDBRepository } from "./mariaDBRepository";
import { MariaDBRepository } from "./repositories/mariaDBRepository";


// cancelar contrato
import { CancelContractUseCase } from "../application/cancelContractUseCase";
import { CreateContractUseCase } from "../application/create_contract_usecase";

import { UpdateContractExpirationUseCase } from "../application/updateContractExpirationUseCase";
import { GetContractByIdUseCase } from "../application/getContractByIdUseCase";
import { GetContractsUseCase } from "../application/getContractsUseCase";



import { CancelContractController} from "./controllers/cancelContractController";
import { CreateContractController } from "./controllers/CreateContractController";
import { UpdateContractExpirationController } from "./controllers/updateContractExpirationController";
import { GetContractByIdController } from "./controllers/getContractByIdController";
import { GetContractsController } from "./controllers/getContractsController";



export const mariaDBRepository = new MariaDBRepository();

//Casos de uso
export const updateContractUseCase = new CancelContractUseCase(mariaDBRepository);
export const updateContractExpirationUseCase = new UpdateContractExpirationUseCase(mariaDBRepository);
export const getContractByIdUseCase = new GetContractByIdUseCase(mariaDBRepository);
export const getContractsUseCase = new GetContractsUseCase(mariaDBRepository);
export const createContractUseCase = new CreateContractUseCase(mariaDBRepository);





//Controladores
export const updateContractController = new CancelContractController(updateContractUseCase);
export const updateContractExpirationController = new UpdateContractExpirationController(updateContractExpirationUseCase);
export const getContractByIdController = new GetContractByIdController(getContractByIdUseCase);
export const getContractsController = new GetContractsController(getContractsUseCase);
export const createContractController = new CreateContractController(createContractUseCase);

