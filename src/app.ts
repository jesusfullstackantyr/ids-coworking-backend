import express from 'express';
import { Signale } from 'signale';
import dotenv from 'dotenv';

import { officeRouter } from './Office/infraestructure/officeRouter';
import { categoryRoutes } from './Category/infraestructure/categoryRouter';
import { ContractRoutes } from './contract/infrastructure/contractRouter';
import { PaypalRoute } from './NewPaypal/infrestructure/paypalRouter';
import { personRoutes } from './person/infrastructure/personRouter';
import { emailRouter } from './person/infrastructure/services/router/emailRouter';
import { userRouter } from './user/infrastructure/userRouter'; 
import { paymentRouter } from './payments/infraestrucuture/routers/paymentRouter';
import { paymentsRouter } from './paymentMethod/infraestructure/routes/paymentMethodRouter';

dotenv.config();

const app = express();
const signale = new Signale();
app.use(express.json());

app.use('/contract',ContractRoutes);
app.use("/Paypal", PaypalRoute);

//app.use('/payments', paymentRouter)
//app.use('/api/v1/Payment', paymentRouter);
app.use('/api/v1/Payment', paymentRouter);
app.use('/api/v1/paymentsMethod',paymentsRouter);

app.use('/api/v1/office', officeRouter);
app.use('/api/v1/category', categoryRoutes);
app.use("/api/v1/cards", paymentsRouter)
app.use('/api/v1/person', personRoutes);
app.use('/api/v1/person/email', emailRouter);
app.use('/api/v1/user', userRouter);


const SERVER_PORT = process.env.SERVER_PORT || 3000;

app.listen(SERVER_PORT, () => {
    signale.success("Server online in port 3001");
});

