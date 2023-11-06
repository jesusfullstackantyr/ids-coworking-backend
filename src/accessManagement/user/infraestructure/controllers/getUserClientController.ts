import { Request, Response } from "express";
import { GetUserClientUseCase } from "../../application/getUserClientUseCase";

export class GetUserClientController {
    constructor(private readonly getUser: GetUserClientUseCase) {}

    async run(req: Request, res: Response) {
        try {
            let {id, idRole} = req.params;

            const result = await this.getUser.run(parseInt(id), parseInt(idRole));
            console.log('result', result)
            if (result) {
                return res.status(200).send({
                    status: "success",
                    data: result,
                    message: "usuario encontrado exitosamente",
                });
            }

            return res.status(404).send({
                status: "error",
                message: "No se encontró el usuario con el ID ingresado",
            });
        } catch (Error) {
            return res.status(500).send({
                status: "error",
                message: "Error al encontrar usuario",
            });
        }
    }
}