import express from "express";
import { createContractController, updateContractController,getContractsController, updateContractExpirationController, getContractByIdController} from "./dependencies";

export const ContractRoutes = express.Router();

ContractRoutes.get(
    "/getContracts", 
    getContractsController.get.bind(getContractsController));
    
ContractRoutes.get(
    "/getContractById/:id", 
    getContractByIdController.getContractById.bind(getContractByIdController));

ContractRoutes.post(
    "/create", 
    createContractController.create.bind(createContractController));

ContractRoutes.put(
    "/cancel/:id", 
    updateContractController.CancelStatus.bind(updateContractController)
    );
ContractRoutes.put(
    "/updateExpiration/:id", 
    updateContractExpirationController.UpdateExpiration.bind(updateContractExpirationController)
    );