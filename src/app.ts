import express from 'express';
import { Signale } from 'signale';
import dotenv from 'dotenv';

import { ContractRoutes } from './invoiceManagement/contract/infraestructure/routes/contractRouter';
import { PaypalRoute } from './NewPaypal/infrestructure/paypalRouter';


import { officeRouter } from './officeManagement/office/infraestructure/routes/officeRouter';
import { categoryRoutes } from './officeManagement/category/infraestructure/routes/categoryRouter';
import { personRoutes } from './person/infrastructure/personRouter';
import { emailRouter } from './person/infrastructure/services/router/emailRouter';
import { userRouter } from './user/infrastructure/userRouter';
import { paymentRouter } from './invoiceManagement/payments/infraestructure/routers/paymentRouter';
import { paymentsRouter } from './invoiceManagement/paymentMethod/infraestructure/routes/paymentMethodRouter';



dotenv.config();

const app = express();
const signale = new Signale();
app.use(express.json());

app.use('/api/v1/contracts', ContractRoutes);

//app.use('/payments', paymentRouter)
//app.use('/api/v1/Payment', paymentRouter);
app.use('/api/v1/Payment', paymentRouter);

app.use('/api/v1/payments_method',paymentsRouter);

app.use('/api/v1/office', officeRouter);
app.use('/api/v1/categories', categoryRoutes);
app.use("/api/v1/cards", paymentsRouter)
app.use('/api/v1/person', personRoutes);
app.use('/api/v1/person/email', emailRouter);
app.use('/api/v1/user', userRouter);

const SERVER_PORT = process.env.SERVER_PORT || 3000;

app.listen(SERVER_PORT, () => {
    signale.success(`API Gateway en el puerto ${SERVER_PORT}`);
});
