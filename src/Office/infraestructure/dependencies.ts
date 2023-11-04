import { MariaDBRepository } from "./mariaDBRepository";
import { CreateOfficeUseCase } from "../application/createOfficeUseCase";
import { CreateOfficeController } from "./controller/createOfficeController";

import { GetOfficeUseCase } from "../application/getOfficeUseCase";
import { GetOfficeController } from "./controller/getOfficeController";

import { UpdateStatus } from "../application/updateStatusUseCase";
import { UpdateStatusController } from "./controller/updateStatusController";


export const mariaDBRepository = new MariaDBRepository();

export const getOfficeUseCase = new GetOfficeUseCase(mariaDBRepository);
export const getOfficeController = new GetOfficeController(getOfficeUseCase);

export const createOfficeUseCase = new CreateOfficeUseCase(mariaDBRepository);
export const createOfficeController = new CreateOfficeController(createOfficeUseCase);

export const updateStatusUseCase = new UpdateStatus(mariaDBRepository);
export const updateStatusController = new UpdateStatusController(updateStatusUseCase);
