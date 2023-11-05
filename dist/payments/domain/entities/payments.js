"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
class Payment {
    constructor(id, amount, payment_date, status) {
        this.id = id;
        this.amount = amount;
        this.payment_date = payment_date;
        this.status = status;
    }
}
exports.Payment = Payment;
