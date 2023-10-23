import express from 'express';
import { Signale } from 'signale';
import { paymentRouter } from './payments/infraestrucuture/routers/paymentRouter';
import dotenv from 'dotenv';


dotenv.config();
const signale = new Signale();

const app = express();

app.use(express.json());
app.use('/Payment', paymentRouter);


app.listen(3000, () => {
  signale.success("Server online in port 3000");
});
