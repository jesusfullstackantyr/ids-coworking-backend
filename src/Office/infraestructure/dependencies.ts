import { MariaDBRepository } from "./mariaDBRepository";

import { GetOfficeUseCase } from "../appliaction/getOfficeUseCase";
import { GetOfficeController } from "./controller/getOfficeController";


export const mariaDBRepository = new MariaDBRepository();

export const getOfficeUseCase = new GetOfficeUseCase(mariaDBRepository);
export const getOfficeController = new GetOfficeController(getOfficeUseCase);

