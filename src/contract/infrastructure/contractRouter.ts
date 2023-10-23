import express from "express";
import { createContractController } from "./dependencies";

export const ContractRoutes = express.Router();

ContractRoutes.post(
    "/create", 
    createContractController.create.bind(createContractController));