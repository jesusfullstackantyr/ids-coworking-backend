import { OpenPay } from "./openPay";
import { Paypal } from "./paypal";

export function paymentFactory(gateway:any) {
    switch(gateway) {
        case 'paypal':
            return new Paypal();

        case 'openPay':
            return new OpenPay();
    }
}