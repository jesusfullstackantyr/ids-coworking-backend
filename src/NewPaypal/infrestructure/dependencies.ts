import { CreatePaypalCase } from "../application/createPayment";
import { PaymentRepositoryr } from "./paypalRepositorys";
import { PayController } from "./controller/controllerPaypal";
import { GetPaypalCase } from "../application/getPayment";

const createPaypalRepository = new PaymentRepositoryr();

export const createPay = new CreatePaypalCase(createPaypalRepository);
export const getPay = new GetPaypalCase(createPaypalRepository)

export const PController = new PayController(createPay,getPay);