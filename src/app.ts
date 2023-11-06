import express from 'express';
import { Signale } from 'signale';
import { PaypalRoute } from './NewPaypal/infrestructure/router/paypalRouter';


const app = express();
const signale = new Signale();

app.use(express.json());
app.use("/api/v1/payments", PaypalRoute);
// Ejemplo app.use('/leads',leadRouter);


app.listen(3000, () => {
    signale.success("Server online in port 3000");
});