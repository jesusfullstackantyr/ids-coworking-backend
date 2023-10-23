import express from 'express';
import { Signale } from 'signale';
import { paymentsRouter } from './payments/infraestructure/routes/paymentsRouter';

const app = express();
const signale = new Signale();


app.use(express.json());
app.use('/api/v1/payments',paymentsRouter);


app.listen(3000, () => {
    signale.success("Server online in port 3000");
});