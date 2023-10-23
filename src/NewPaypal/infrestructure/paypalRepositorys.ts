import { PaypalRepository } from "../domain/paypalRepository";
import https from 'https';

export class PaymentRepositoryr implements PaypalRepository {
    async createPaypal(): Promise<any | null> {
        const CLIENT = 'AUkxoeRRN4eDJD7cnRX93DaaTyrjmYqG3zYr4eliKeQbp7ZdZwSJbsH8isqVph9LP0IwZxkzgJ7TMtbN';
        const SECRET = 'EGMJ5B5KtpU1bzsBiaCqKOsWot_o6EfIcyhg7lql3_HoHJL0f2VWzGN_QZRMJYHyneMsVjlGxJyMrRV7';

        const auth = { user: CLIENT, pass: SECRET };

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

    async getPaypal(token:string): Promise<any|null> {
        
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
