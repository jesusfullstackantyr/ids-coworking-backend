import { MariaDBRepository } from "./mariaDBRepository";
import { UpdateStatus } from "../appliaction/updateStatusUseCase";
import { UpdateStatusController } from "./controller/updateStatus";

export const mariaDBRepository = new MariaDBRepository();

export const updateStatusUseCase = new UpdateStatus(mariaDBRepository);
export const updateStatusController = new UpdateStatusController(updateStatusUseCase);
