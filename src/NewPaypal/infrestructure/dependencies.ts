import { CreatePaypalCase } from "../application/createPaymentPaypal";

import { PayController } from "./controller/controllerPaypal";
import { GetPaypalCase } from "../application/getPayment";
import { CreatePaymentCase } from "../application/createPayments";
import { PaypalRepositoryr } from "./repositories/paypalRepositorys";

const createPaypalRepository = new PaypalRepositoryr();

export const createPay = new CreatePaypalCase(createPaypalRepository);
export const getPay = new GetPaypalCase(createPaypalRepository)
export const createPayment = new CreatePaymentCase(createPaypalRepository)

export const PController = new PayController(createPay,getPay,createPayment);