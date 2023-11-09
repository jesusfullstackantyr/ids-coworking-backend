import { Request, Response } from "express";
import { PaymentOpenpay } from "../services/openpay";
import { CustomerRequest } from "../../domain/entities/customer";
import { CardRequest } from "../../domain/entities/card";
import { v4 as uuidv4 } from 'uuid';
import { MakePaymentUseCase } from "../../application/useCases/MakePaymentUseCase";

/*
    {
        payload:{
            card:{},
            user:{},
            office:{},
            contract:{}
        }
       
    }
*/


export class MakePaymentController {
    constructor(readonly makePaymentUseCase: MakePaymentUseCase) { }

    async run(req: Request, res: Response) {
        const MERCHANT_ID = 'm59hfwafesvnn4ctddj7';
        const PRIVATE_API_KEY = 'sk_01d43bdbe6fb42d4be7bea2657ad3d5c';
        const isProductionMode = false;
        const method = 'card'
        const fullUuid = uuidv4();
        const device_session_id = fullUuid.substring(0, 8) + fullUuid.substring(9, 13) + fullUuid.substring(14, 18) + fullUuid.substring(19, 23) + fullUuid.substring(24, 36);
        const id_payment_method = "2"

        try {
            let {
                name,
                email,
                phone,
                card_number,
                cvv,
                expiration_month,
                expiration_year,
                amount,
                description,
                id_contract,
                id_card,
                id_user
            } = req.body

            const customerRequest: CustomerRequest = {
                name: name,
                email: email,
                requires_account: false
            };

            const cardRequest: CardRequest = {
                holder_name: name,
                card_number: card_number,
                cvv2: cvv,
                expiration_month: expiration_month,
                expiration_year: expiration_year
            };

            //mandar a llamar servicio de openPay
            const dataPay: any = await PaymentOpenpay(
                MERCHANT_ID,
                PRIVATE_API_KEY,
                isProductionMode,
                customerRequest,
                cardRequest,
                method,
                amount,
                description,
                device_session_id
            )

            let payment = await this.makePaymentUseCase.run(
                name,
                email,
                phone,
                card_number,
                cvv,
                expiration_month,
                expiration_year,
                amount,
                description,
                id_contract,
                id_card,
                id_user,
                dataPay
            )

            if (payment instanceof Error) {
                return res.status(400).send({
                    status: "error",
                    message: payment.message
                })
            } else {
                return res.status(200).send({

                    status: "succes",
                    data: payment
                })
            }


        } catch (error) {
            console.log(error)
        }
    }
}