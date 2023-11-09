import { MariadbPersonRepository } from "./repositories/mariadbPersonRepository";
const mariadbPersonRepository= new MariadbPersonRepository();

import { RegisterPersonController } from "./controllers/registerPersonController";
import { RegisterPersonUseCase } from "../application/registerPersonUseCase";

const registerPersonUseCase = new RegisterPersonUseCase(mariadbPersonRepository);
const registerPersonController = new RegisterPersonController(registerPersonUseCase);

import { UpdatePersonController } from "./controllers/updatePersonController";
import { UpdatePersonUseCase } from "../application/updatePersonUseCase";

const updatePersonUseCase = new UpdatePersonUseCase(mariadbPersonRepository);
const updatePersonController = new UpdatePersonController(updatePersonUseCase);

import { validatePersonController } from "./controllers/validatePersonController";
import { validatePersonUseCase } from "../application/validatePersonUseCase";

const ValidatePersonUseCase = new validatePersonUseCase(mariadbPersonRepository);
const ValidatePersonController = new validatePersonController(ValidatePersonUseCase);

import { ListAllPersonUseCase} from "../application/listAllPersonUseCase";
import { ListAllPersonController} from "./controllers/listAllPersonController";

const listAllPersonUseCase = new ListAllPersonUseCase(mariadbPersonRepository)
const getAllPersonController = new ListAllPersonController(listAllPersonUseCase)

import { UpdatePersonAddressController } from "./controllers/updatePersonAddressController";
import { UpdatePersonAddressUseCase } from "../application/updatePersonAddressUseCase";

const updatePersonAddressUseCase = new UpdatePersonAddressUseCase(mariadbPersonRepository);
const updatePersonAddressController = new UpdatePersonAddressController(updatePersonAddressUseCase);

export {
    updatePersonController,
    registerPersonController,
    ValidatePersonController,
    updatePersonAddressController,
    getAllPersonController,
};