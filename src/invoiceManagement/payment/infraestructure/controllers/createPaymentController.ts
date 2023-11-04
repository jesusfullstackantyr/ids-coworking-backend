import { paymentFactory } from "../services/payments/paymentFactory";

export class createPaymentController {

    constructor ( /* agregar tu repository*/) {}

    async execute() {

        try {
            //const paymentType = "paypal";
            const gateway = "openPay";

            //TRANSACCTION DATA
            /*
                OBJECTO QUE OCUPAS NECESARIAMENTE PARA GENERAR LA 
                TRANSACCION YA SEA DE PAYPAL O DE OPEN PAY

                COMO HARAN VARIAS GUARDADOS EN LA DB EN UN MISMO FLUJO UTILICEN TRANSACCIONES EN LA DB
            */
            const paymentPayload = {};

            let payment = paymentFactory(gateway);

            // obtener credenciales de ENV

            const credentials = {
                publicKey:"",
                privateKey:"",
                isLive:false
            };

            payment?.setCredentials(
                credentials.publicKey,
                credentials.privateKey,
                credentials.isLive
            );

            let responsePayment = await payment?.pay(paymentPayload);

            // GUARDAR DATOS DE LA TARJETA

            // CREAR NUEVO REGISTRO DE PAGO USEN PAYMENTTYPE PARA SABER QUE TIPO DE PAGO SERA EN TIPO

            // LO QUE ESTAN PAGANDO ES UN CONTRATO ENTONCES DEBERAN ACTUALIZAR EL CONTRATO VERIFICA FLUJO


        }catch(error) {
            // CATCHEAR LOS DATOS O ERRORES QUE PUEDAN GENERARSE AL GENERAR LA TRANSACCION O GENERAR LOS DATOS
        }

    }

}