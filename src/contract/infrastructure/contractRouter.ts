import express from "express";
import { createContractController, updateContractController} from "./dependencies";

export const ContractRoutes = express.Router();

ContractRoutes.post(
    "/create", 
    createContractController.create.bind(createContractController));

ContractRoutes.put(
    "/cancel/:id", 
    updateContractController.CancelStatus.bind(updateContractController)
    );