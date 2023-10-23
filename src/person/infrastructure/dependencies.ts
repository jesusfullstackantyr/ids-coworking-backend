import { MariadbPersonRepository } from "./mariadbPersonRepository";
const mariadbPersonRepository= new MariadbPersonRepository();

import { validatePersonController } from "./controllers/validatePersonController";
import { validatePersonUseCase } from "../application/validatePersonUseCase";

const ValidatePersonUseCase = new validatePersonUseCase(mariadbPersonRepository);
const ValidatePersonController = new validatePersonController(ValidatePersonUseCase);

export {
    ValidatePersonController,
};