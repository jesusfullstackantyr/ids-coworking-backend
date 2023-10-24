

import { MakePaymentUseCase } from "../application/MakePaymentUseCase";
import { MakePaymentController } from "./controller/MakePaymentController";
import { MariadbCardRepository } from "./mariadbPaymentRepository";



export const mariadbCardRepository = new MariadbCardRepository()

export const makePaymentUseCase = new MakePaymentUseCase(mariadbCardRepository)
export const makePaymentController =  new MakePaymentController(makePaymentUseCase)