import express from "express";
// import {  updateContractController, updateContractExpirationController, getContractByIdController} from "./dependencies";
import { updateContractController,updateContractExpirationController, getContractByIdController } from "../dependencies";

export const ContractRoutes = express.Router();


    
ContractRoutes.get(
    "/getContractById/id=:id", 
    getContractByIdController.getContractById.bind(getContractByIdController));


ContractRoutes.put(
    "/cancel/id=:id", 
    updateContractController.CancelStatus.bind(updateContractController)
    );

    
ContractRoutes.put(
    "/updateExpiration/id=:id", 
    updateContractExpirationController.UpdateExpiration.bind(updateContractExpirationController)
    );