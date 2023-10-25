import { OpenPay } from "./openPay";
import { Paypal } from "./paypal";

export function paymentFactory(type:any) {
    switch(type) {
        case 'paypal':
            return new Paypal();

        case 'openPay':
            return new OpenPay();
    }
}