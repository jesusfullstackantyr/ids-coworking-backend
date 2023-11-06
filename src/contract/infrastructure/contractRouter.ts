import express from "express";
import { createContractController, updateContractController, getContractByIdController } from "./dependencies";

export const ContractRoutes = express.Router();

ContractRoutes.post(
    "/create",
    createContractController.create.bind(createContractController));

ContractRoutes.get(
    "/:id",
    getContractByIdController.getById.bind(getContractByIdController));

ContractRoutes.put(
    "/cancel/:id",
    updateContractController.CancelStatus.bind(updateContractController)
);