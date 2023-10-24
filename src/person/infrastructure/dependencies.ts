import { MariadbPersonRepository } from "./mariadbPersonRepository";
const mariadbPersonRepository= new MariadbPersonRepository();

<<<<<<< HEAD
<<<<<<< HEAD


import { RegisterPersonController } from "./controllers/registerPersonController";
import { RegisterPersonUseCase } from "../application/registerPersonUseCase";

const registerPersonUseCase = new RegisterPersonUseCase(mariadbPersonRepository);
const registerPersonController = new RegisterPersonController(registerPersonUseCase);

export {
    registerPersonController,
    
=======
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
>>>>>>> eb33269aad852f9d8c41ad3af7075e180e2f12f5
=======
import { validatePersonController } from "./controllers/validatePersonController";
import { validatePersonUseCase } from "../application/validatePersonUseCase";

const ValidatePersonUseCase = new validatePersonUseCase(mariadbPersonRepository);
const ValidatePersonController = new validatePersonController(ValidatePersonUseCase);

export {
    ValidatePersonController,
>>>>>>> 4937744aa77bfc5f0fd945fc037deae94137f9d1
};