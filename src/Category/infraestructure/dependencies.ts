import { MariaDBRepository } from "./mariaDBRepository";

import { CreateCategoryUseCase } from "../application/createCategoryUseCase";
import { CreateCategoryController } from "./controllers/createCategoryController";

export const mariaDBRepository = new MariaDBRepository();

//Casos de uso
export const createCategoryUseCase = new CreateCategoryUseCase(mariaDBRepository);

//Controladores
export const createCategoryController = new CreateCategoryController(createCategoryUseCase);