import { MariadbUserRepository } from "./repositories/mariadbUserRepository";
const mariadbUserRepository = new MariadbUserRepository();

import { GetUserClientController} from "./controllers/getUserClientController";
import { GetUserClientUseCase } from "../application/getUserClientUseCase";

const getUserClientUseCase = new GetUserClientUseCase(mariadbUserRepository); 
const getUserClientController = new GetUserClientController(getUserClientUseCase);

export {
    getUserClientController,
};
