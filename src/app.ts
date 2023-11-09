
import express from 'express';
import { Signale } from 'signale';
import dotenv from 'dotenv';

import { officeRouter } from './officeManagement/office/infraestructure/routes/officeRouter';
import { categoryRoutes } from './officeManagement/category/infraestructure/routes/categoryRouter';
//import { ContractRoutes } from './contract/infrastructure/contractRouter';
import { PaypalRoute } from './NewPaypal/infrestructure/paypalRouter';

import { paymentRouter } from './invoiceManagement/payments/infraestructure/routers/paymentRouter';
import { paymentsRouter } from './invoiceManagement/paymentMethod/infraestructure/routes/paymentMethodRouter';
import { ContractRoutes } from './invoiceManagement/contract/infraestructure/routes/contractRouter';
import { personRoutes } from './accessManagement/person/infrastructure/routes/personRouter';
import { emailRouter } from './accessManagement/person/infrastructure/services/emailRouter';
import { userRouter } from './accessManagement/user/infraestructure/routes/userRouter';
import { addressRoutes } from './accessManagement/address/infrastructure/routes/addressRouter';



dotenv.config();

const app = express();
const signale = new Signale();
app.use(express.json());

app.use("/Paypal", PaypalRoute);

//app.use('/payments', paymentRouter)
app.use('/api/v1/payments', PaypalRoute);
app.use('/api/v1/Payment', paymentRouter);
app.use('/api/v1/payments_method',paymentsRouter);

app.use('/api/v1/office', officeRouter);
app.use('/api/v1/category', categoryRoutes);
app.use("/api/v1/cards", paymentsRouter)
app.use('/api/v1/person', personRoutes);
app.use('/api/v1/person/email', emailRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/contracts', ContractRoutes);
app.use('/api/v1/address', addressRoutes)



const SERVER_PORT = process.env.SERVER_PORT || 3000;

app.listen(SERVER_PORT, () => {
    signale.success("Server online in port 3001");
});

