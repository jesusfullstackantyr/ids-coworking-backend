import { MariadbPersonRepository } from "./mariadbPersonRepository";
const mariadbPersonRepository= new MariadbPersonRepository();

import { validatePersonController } from "./controllers/validatePersonController";
import { validatePersonUseCase } from "../application/validatePersonUseCase";

const ValidatePersonUseCase = new validatePersonUseCase(mariadbPersonRepository);
const ValidatePersonController = new validatePersonController(ValidatePersonUseCase);

import { disapprovedPersonController } from "./controllers/disapprovedPersonController";
import { disapprovedPersonUseCase } from "../application/disapprovedPersonUseCase";

const DisapprovedPersonUseCase = new disapprovedPersonUseCase(mariadbPersonRepository);
const DisapprovedPersonController = new disapprovedPersonController(DisapprovedPersonUseCase);

export {
    ValidatePersonController,
    DisapprovedPersonController
};