import express from 'express';
import { Signale } from 'signale';
import dotenv from 'dotenv';

import { paymentsRouter } from './paymentMethod/infraestructure/routes/paymentMethodRouter';

dotenv.config();

const app = express();
const signale = new Signale();
app.use(express.json());


app.use('/api/v1/paymentsMethod',paymentsRouter);



const SERVER_PORT = process.env.SERVER_PORT || 3000;

app.listen(SERVER_PORT, () => {
    signale.success("Server online in port 3000");
});

