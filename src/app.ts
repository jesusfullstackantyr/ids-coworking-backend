import express from 'express';
import { Signale } from 'signale';
import { paymentRouter } from './payments/infraestrucuture/routers/paymentRouter';
import dotenv from 'dotenv';


dotenv.config();

const app = express();
const signale = new Signale();
app.use(express.json());


app.use('/Payment', paymentRouter);
// Ejemplo app.use('/leads',leadRouter);


app.listen(3000, () => {
  signale.success("Server online in port 3000");
});
