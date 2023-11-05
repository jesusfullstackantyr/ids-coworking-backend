import { MariadbAddressRepository } from "./mariadbAddressRepository";
const mariadbAddressRepository= new MariadbAddressRepository();

import { ListAllAddressUseCase} from "../application/listAllAddressUseCase";
import { ListAllAddressController} from "./controllers/listAllAddressController";

const listAllPersonUseCase = new ListAllAddressUseCase(mariadbAddressRepository)
const getAllAddressController = new ListAllAddressController(listAllPersonUseCase)

import { RegisterAddressController } from "./controllers/registerAddressController";
import { RegisterAddressUseCase } from "../application/registerAddressUseCase";

const registerAddressUseCase = new RegisterAddressUseCase(mariadbAddressRepository);
const registerAddressController = new RegisterAddressController(registerAddressUseCase);

import { UpdateAddressController } from "./controllers/updateAddressController";
import { UpdateAddressUseCase } from "../application/updateAddressUseCase";

const updateAddressUseCase = new UpdateAddressUseCase(mariadbAddressRepository);
const updateAddressController = new UpdateAddressController(updateAddressUseCase);

export {
    registerAddressController,
    getAllAddressController,
    updateAddressController,
};