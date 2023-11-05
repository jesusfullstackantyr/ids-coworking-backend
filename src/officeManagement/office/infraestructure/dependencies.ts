import { MariaDBRepository } from "./repositories/mariaDBRepository";
import { CreateOfficeUseCase } from "../application/createOfficeUseCase";
import { CreateOfficeController } from "./controller/createOfficeController";

import { UpdateOfficeUseCase } from "../application/updateOfficeUsecase";
import { UpdateOfficeController } from "./controller/updateOfficeController";

import { GetOfficeUseCase } from "../application/getOfficeUseCase";
import { GetOfficeController } from "./controller/getOfficeController";

import { UpdateStatus } from "../application/updateStatusUseCase";
import { UpdateStatusController } from "./controller/updateStatusController";


export const mariaDBRepository = new MariaDBRepository();

export const getOfficeUseCase = new GetOfficeUseCase(mariaDBRepository);
export const getOfficeController = new GetOfficeController(getOfficeUseCase);

export const createOfficeUseCase = new CreateOfficeUseCase(mariaDBRepository);
export const createOfficeController = new CreateOfficeController(createOfficeUseCase);
export const updateOfficeUseCase = new UpdateOfficeUseCase(mariaDBRepository);
export const updateOfficeController = new UpdateOfficeController(updateOfficeUseCase);

export const updateStatusUseCase = new UpdateStatus(mariaDBRepository);
export const updateStatusController = new UpdateStatusController(updateStatusUseCase);
