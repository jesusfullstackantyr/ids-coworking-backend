import { MariadbPersonRepository } from "./repositories/mariadbPersonRepository";
const mariadbPersonRepository= new MariadbPersonRepository();

import { RegisterPersonController } from "./controllers/registerPersonController";
import { RegisterPersonUseCase } from "../application/registerPersonUseCase";

const registerPersonUseCase = new RegisterPersonUseCase(mariadbPersonRepository);
const registerPersonController = new RegisterPersonController(registerPersonUseCase);

import { UpdatePersonAddressController } from "./controllers/updatePersonAddressController";
import { UpdatePersonAddressUseCase } from "../application/updatePersonAddressUseCase";

const updatePersonAddressUseCase = new UpdatePersonAddressUseCase(mariadbPersonRepository);
const updatePersonAddressController = new UpdatePersonAddressController(updatePersonAddressUseCase);

import { ListAllPersonUseCase} from "../application/listAllPersonUseCase";
import { ListAllPersonController} from "./controllers/listAllPersonController";

const listAllPersonUseCase = new ListAllPersonUseCase(mariadbPersonRepository)
const getAllPersonController = new ListAllPersonController(listAllPersonUseCase)

export {
    registerPersonController,
    updatePersonAddressController,
    getAllPersonController,
};