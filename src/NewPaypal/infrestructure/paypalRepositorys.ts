import { PaypalRepository } from "../domain/repositories/paypalRepository";
import https from 'https';
import { PaymentData } from "../domain/repositories/paypalRepository";
import { pool } from "../../database/mariaDb"; 
import { Payment } from "../domain/entities/payments";
import { format } from 'date-fns'; 

export class PaypalRepositoryr implements PaypalRepository {
    async createPayment(payment: PaymentData): Promise<Payment | null> {
        let conn;
        try {
            conn = await pool.getConnection();

            const formattedDate = format(new Date(payment.payment_date), 'yyyy-MM-dd HH:mm:ss');
            console.log("Conexión exitosa a la BD");
            const query = "INSERT INTO payments (id, amount, payment_date, status, token, metaData, id_contract, id_payment_method, id_card, id_user) VALUES (?,?,?,?,?,?,?,?,?,?)";
            const result = await conn.query(query, [payment.id, payment.amount, formattedDate, payment.status, payment.token, JSON.stringify(payment.metaData), payment.id_contract, payment.id_payment_method, payment.id_card, payment.id_user]);
            console.log(query);
            if (result.affectedRows > 0) {
                return payment;
            } else {
                return null;
            }
        } catch (error) {
            console.log(error);
            return null;
        } finally {
            if (conn) {
                conn.release(); // Devuelve la conexión al pool al finalizar
            }
        }
    }

    async createPaypal(): Promise < any | null > {
    const CLIENT = 'AUkxoeRRN4eDJD7cnRX93DaaTyrjmYqG3zYr4eliKeQbp7ZdZwSJbsH8isqVph9LP0IwZxkzgJ7TMtbN';
    const SECRET = 'EGMJ5B5KtpU1bzsBiaCqKOsWot_o6EfIcyhg7lql3_HoHJL0f2VWzGN_QZRMJYHyneMsVjlGxJyMrRV7';

    const body = {
        intent: 'CAPTURE',
        purchase_units: [{
            amount: {
                currency_code: 'MXN',
                value: '150'
            }
        }],
        application_context: {
            brand_name: `Coworking`,
            landing_page: 'NO_PREFERENCE',
            user_action: 'PAY_NOW',
            return_url: `http://localhost:3000/Paypal/execute-payment`,
            cancel_url: `http://localhost:3000/cancel-payment`
        }
    };

    const options = {
        hostname: 'api-m.sandbox.paypal.com',
        port: 443,
        path: '/v2/checkout/orders',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + Buffer.from(`${CLIENT}:${SECRET}`).toString('base64')
        }
    };

    return new Promise((resolve, reject) => {
        const req = https.request(options, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                resolve(JSON.parse(data));
            });
        });

        req.on('error', (error) => {
            console.error(error);
            reject(null);
        });

        req.write(JSON.stringify(body));
        req.end();
    });
}

    async getPaypal(token: string): Promise < any | null > {

    const CLIENT = 'AUkxoeRRN4eDJD7cnRX93DaaTyrjmYqG3zYr4eliKeQbp7ZdZwSJbsH8isqVph9LP0IwZxkzgJ7TMtbN';
    const SECRET = 'EGMJ5B5KtpU1bzsBiaCqKOsWot_o6EfIcyhg7lql3_HoHJL0f2VWzGN_QZRMJYHyneMsVjlGxJyMrRV7';
    const options = {
        hostname: 'api-m.sandbox.paypal.com',
        port: 443,
        path: `/v2/checkout/orders/${token}/capture`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + Buffer.from(`${CLIENT}:${SECRET}`).toString('base64')
        }
    };
    return new Promise((resolve, reject) => {
        const req = https.request(options, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                resolve(JSON.parse(data));
            });
        });

        req.on('error', (error) => {
            console.error(error);
            reject(null);
        });

        req.write(JSON.stringify({}));
        req.end();
    });

    
}
}
