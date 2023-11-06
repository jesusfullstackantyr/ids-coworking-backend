import express from "express";
// import {  updateContractController, updateContractExpirationController, getContractByIdController} from "./dependencies";
import { updateContractController, updateContractExpirationController, getContractByIdController, getContractsController, createContractController } from "../dependencies";

export const ContractRoutes = express.Router();



ContractRoutes.get(
    "/id=:id",
    getContractByIdController.getContractById.bind(getContractByIdController));

ContractRoutes.post(
        "/create",
        createContractController.create.bind(createContractController));


ContractRoutes.put(
    "/cancel/id=:id",
    updateContractController.CancelStatus.bind(updateContractController)
);


ContractRoutes.put(
    "/expiration/id=:id",
    updateContractExpirationController.UpdateExpiration.bind(updateContractExpirationController)
);

ContractRoutes.get(
    "/",
    getContractsController.get.bind(getContractsController));


ContractRoutes.put(
    "/cancel/id=:id",
    updateContractController.CancelStatus.bind(updateContractController)
);


ContractRoutes.put(
    "/expiration/id=:id",

)