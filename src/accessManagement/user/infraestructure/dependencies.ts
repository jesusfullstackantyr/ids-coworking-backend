import { UserMariaDBAdapterRepository } from "./adapters/userMariaDBAdapter";
import { UserCreateUseCase } from '../application/userCreateUseCase';
import { UserCreateController } from './controllers/userCreateController';
import { UserUpdateUseCase } from '../application/userUpdateUseCase';
import { UserUpdateController } from './controllers/userUpdateController';
import { UserDeleteUseCase } from '../application/userDeleteUseCase';
import { UserDeleteController } from './controllers/userDeleteController';
import { GetUserByIdUseCase } from '../application/userGetUseCase'; // Importa el caso de uso para obtener usuario por ID
import { UserGetController } from './controllers/userGetController'; // Importa el controlador para obtener usuario por ID
import { GetUserClientController} from "./controllers/getUserClientController";
import { GetUserClientUseCase } from "../application/getUserClientUseCase"
import { UpdatePasswordController } from "./controllers/updatePasswordController";
import { UpdatePasswordUseCase } from "../application/updatePasswordUseCase";

const mariDBUserAdapter = new UserMariaDBAdapterRepository();
const createUserUseCase = new UserCreateUseCase(mariDBUserAdapter);
export const userCreateController = new UserCreateController(createUserUseCase);

const userUpdateUseCase = new UserUpdateUseCase(mariDBUserAdapter);
export const userUpdateController = new UserUpdateController(userUpdateUseCase);

const userDeleteUseCase = new UserDeleteUseCase(mariDBUserAdapter);
export const userDeleteController = new UserDeleteController(userDeleteUseCase);

// Instancia el caso de uso para obtener usuario por ID
const userGetUseCase = new GetUserByIdUseCase(mariDBUserAdapter);
// Crea el controlador para obtener usuario por ID
export const userGetController = new UserGetController(userGetUseCase);

const getUserClientUseCase = new GetUserClientUseCase(mariDBUserAdapter); 
export const getUserClientController = new GetUserClientController(getUserClientUseCase);

const updatePasswordUseCase = new UpdatePasswordUseCase(mariDBUserAdapter);
export const updatePasswordController = new UpdatePasswordController(updatePasswordUseCase);
