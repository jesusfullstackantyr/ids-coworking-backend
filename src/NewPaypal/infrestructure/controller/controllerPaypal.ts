import { Request, Response } from "express";
import { PaymentData } from "../../domain/repositories/paypalRepository";
import { CreatePaypalCase } from "../../application/createPaymentPaypal";
import { GetPaypalCase } from "../../application/getPayment";
import { CreatePaymentCase } from "../../application/createPayments";

export class PayController{
    constructor(
        readonly createPaypalUseCase:CreatePaypalCase,
        readonly getPaypalUseCase:GetPaypalCase,
        readonly createPaymentUseCase: CreatePaymentCase
    ){}
    async createPayment(req:Request, res:Response){
        const data: PaymentData = {
            id: req.body.id,
            amount: req.body.amount,
            payment_date:req.body.payment_date,
            status:req.body.status,
            token:req.body.token,
            metaData:req.body.metaData,
            id_contract:req.body.id_contract,
            id_payment_method:req.body.id_payment_method,
            id_card:req.body.id_card,
            id_user:req.body.id_user
        }
        try {
            const paymentPay = await this.createPaymentUseCase.run(data)
            if (paymentPay!==null){
                res.status(200).send({
                    status:"success",
                    data:paymentPay
                });
            }else{
                res.status(400).send('NO SE CREO EL PAYMENT')
            }
        } catch (error) {
            
        }
    }
    async createPaymentPaypal(req: Request, res: Response) {
        const id = Number(req.params.id);
        try {
            const pay = await this.createPaypalUseCase.run(id);
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
