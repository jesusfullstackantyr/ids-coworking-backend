import express from 'express';
import { Signale } from 'signale';
import { ContractRoutes } from './contract/infrastructure/contractRouter';
import { PaypalRoute } from './NewPaypal/infrestructure/paypalRouter';
import { paymentRouter } from './payments/infrastructure/routes/paymentRouter';

const app = express();
const signale = new Signale();

app.use(express.json());
app.use('/contract',ContractRoutes);
app.use("/Paypal", PaypalRoute);
app.use('/payments', paymentRouter)
// Ejemplo app.use('/leads',leadRouter);


app.listen(3000, () => {
    signale.success("Server online in port 3000");
});