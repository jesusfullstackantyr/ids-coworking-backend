import { MariadbPersonRepository } from "./mariadbPersonRepository";
const mariadbPersonRepository= new MariadbPersonRepository();

import { UpdatePesonAddressController } from "./controllers/updatePersonAddressController";
import { UpdatePersonAddressUseCase } from "../application/updatePersonAddressUseCase";

const updatePersonAddressUseCase = new UpdatePersonAddressUseCase(mariadbPersonRepository);
const updatePersonAddressController = new UpdatePesonAddressController(updatePersonAddressUseCase);

import { ListAllPersonUseCase} from "../application/listAllPersonUseCase";
import { ListAllPersonController} from "./controllers/listAllPersonController";

const listAllPersonUseCase = new ListAllPersonUseCase(mariadbPersonRepository)
const getAllPersonController = new ListAllPersonController(listAllPersonUseCase)

export {
    updatePersonAddressController,
    getAllPersonController,
};