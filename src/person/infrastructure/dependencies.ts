import { MariadbPersonRepository } from "./mariadbPersonRepository";
const mariadbPersonRepository= new MariadbPersonRepository();

import { registerPersonController } from "./controllers/registerPersonController";
import { RegisterPersonUseCase } from "../application/registerPersonUseCase";

const registerPersonUseCase = new RegisterPersonUseCase(mariadbPersonRepository);
const RegisterPersonController = new registerPersonController(registerPersonUseCase);

export {
    RegisterPersonController,
};