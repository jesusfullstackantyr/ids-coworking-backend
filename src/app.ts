import express from 'express';
import { Signale } from 'signale';
import { paymentsRouter } from './paymentMethod/infraestructure/routes/paymentMethodRouter';

const app = express();
const signale = new Signale();


app.use(express.json());
app.use('/api/v1/paymentsMethod',paymentsRouter);


app.listen(3000, () => {
    signale.success("Server online in port 3000");
});