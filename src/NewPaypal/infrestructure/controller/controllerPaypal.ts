import { Request, Response } from "express";
import { CreatePaypalCase } from "../../application/createPayment";
import { GetPaypalCase } from "../../application/getPayment";

export class PayController{
    constructor(
        readonly createPaypalUseCase:CreatePaypalCase,
        readonly getPaypalUseCase:GetPaypalCase
    ){}
    async createPayment(req: Request, res: Response) {
        try {
            const pay = await this.createPaypalUseCase.run();
            if (pay!==null){
                res.status(200).send({
                    status:"Success",
                    data:pay
                });
            }else{
                res.status(404).send('No se pudo efectuar el pago')
            }
           
        } catch (error) {
            res.status(500).send({
                status: "error",
                data: "Ocurrio un error",
                message: error,
            });
        }
    }
    async getPayment(req:Request, res:Response){
        const token = String(req.query.token);
        try{
            const pay = await this.getPaypalUseCase.run(token);
            if(pay!==null){
                res.status(200).send({
                    status:"Success",
                    data:pay
                });
            }else{
                res.status(404).send('No se pudo obtener el pago')
            }
        }catch(error){
            res.status(500).send({
                status:"error",
                data:"Ocurrio un error",
                message:error,
            });
        }
    }
}
