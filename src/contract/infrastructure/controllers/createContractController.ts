import { Response, Request } from "express";
import { CreateContractUseCase } from "../../application/create_contract_usecase";
import { Contract } from "../../domain/contract";


export class CreateContractController {
    constructor(readonly CreateContractUseCase: CreateContractUseCase){}

    async create(req: Request, res: Response) {
        try {
            let { amount,start_date,expiration_date,status,iduser,idoffice} = req.body;

            const createContract = await this.CreateContractUseCase.create(
                amount,
                start_date,
                expiration_date,
                status,
                iduser,
                idoffice
            );

            if (createContract instanceof Error) {
                return res.status(400).send({
                    status: "error",
                    message: createContract.message,
                });
            }

            if (createContract instanceof Contract) {
                return res.status(201).send({
                    status: "success",
                    data: {
                        amount: createContract.amount,
                        start_date: createContract.start_date,
                        expiration_date: createContract.expiration_date,
                        status: createContract.status,
                        iduser: createContract.iduser,
                        idoffice: createContract.idoffice,
                    },
                    message: "La categoria ha sido creada con éxito",

                });
            } else {
                return res.status(500).send({
                    status: "error",
                    message: "Error al crear la categoria"
                });
            }

        } catch (error) {
            console.error("Error al crear la categoria:", error); // Agregar un registro detallado del error
            return res.status(500).send({
                status: "error",
                message: "An unexpected error occurred. Please try again later.",
            });
        }
    }
}