import express from 'express';
import { Signale } from 'signale';
import { paymentRouter } from './payments/infraestrucuture/routers/paymentRouter';
import { paymentsRouter } from './paymentMethod/infraestructure/routes/paymentMethodRouter';

import dotenv from 'dotenv';


dotenv.config();

const app = express();
const signale = new Signale();
app.use(express.json());


app.use('/api/v1//Payment', paymentRouter);
app.use('/api/v1/paymentsMethod',paymentsRouter);
app.use("/api/v1/cards", paymentsRouter)

app.use(express.json());


app.listen(3000, () => {
  signale.success("Server online in port 3000");
});

