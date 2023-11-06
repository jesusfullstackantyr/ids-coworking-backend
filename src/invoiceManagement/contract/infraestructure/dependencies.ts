// import { MariaDBRepository } from "./mariaDBRepository";
import { MariaDBRepository } from "./repositories/mariaDBRepository";


// cancelar contrato
import { CancelContractUseCase } from "../application/cancelContractUseCase";
import { UpdateContractExpirationUseCase } from "../application/updateContractExpirationUseCase";
import { GetContractByIdUseCase } from "../application/getContractByIdUseCase";


import { CancelContractController} from "./controllers/cancelContractController";
import { UpdateContractExpirationController } from "./controllers/updateContractExpirationController";
import { GetContractByIdController } from "./controllers/getContractByIdController";



export const mariaDBRepository = new MariaDBRepository();

//Casos de uso
export const updateContractUseCase = new CancelContractUseCase(mariaDBRepository);
export const updateContractExpirationUseCase = new UpdateContractExpirationUseCase(mariaDBRepository);
export const getContractByIdUseCase = new GetContractByIdUseCase(mariaDBRepository);



//Controladores
export const updateContractController = new CancelContractController(updateContractUseCase);
export const updateContractExpirationController = new UpdateContractExpirationController(updateContractExpirationUseCase);
export const getContractByIdController = new GetContractByIdController(getContractByIdUseCase);

