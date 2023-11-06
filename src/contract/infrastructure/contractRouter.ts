import express from "express";
<<<<<<< HEAD
import { createContractController, updateContractController, getContractByIdController } from "./dependencies";
=======
import { createContractController, updateContractController} from "./dependencies";
>>>>>>> origin/201227-Feature-IC-3-Cancelar-Contrato

export const ContractRoutes = express.Router();

ContractRoutes.post(
<<<<<<< HEAD
    "/create",
    createContractController.create.bind(createContractController));

ContractRoutes.get(
    "/:id",
    getContractByIdController.getById.bind(getContractByIdController));

ContractRoutes.put(
    "/cancel/:id",
    updateContractController.CancelStatus.bind(updateContractController)
);
=======
    "/create", 
    createContractController.create.bind(createContractController));

ContractRoutes.put(
    "/cancel/:id", 
    updateContractController.CancelStatus.bind(updateContractController)
    );
>>>>>>> origin/201227-Feature-IC-3-Cancelar-Contrato
