import express from "express";
import { createContractController, updateContractController,getContractsController, updateContractExpirationController, getContractByIdController} from "./dependencies";

export const ContractRoutes = express.Router();

ContractRoutes.get(
    "/", 
    getContractsController.get.bind(getContractsController));
    
ContractRoutes.get(
    "id=:id", 
    getContractByIdController.getContractById.bind(getContractByIdController));

ContractRoutes.post(
    "/", 
    createContractController.create.bind(createContractController));

ContractRoutes.put(
    "/cancel/id=:id", 
    updateContractController.CancelStatus.bind(updateContractController)
    );
ContractRoutes.put(
    "/expiration/id=:id", 
    updateContractExpirationController.UpdateExpiration.bind(updateContractExpirationController)
    );