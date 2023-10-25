import express from 'express';
import { officeRouter } from './Office/infraestructure/officeRouter';
import { categoryRoutes } from './Category/infraestructure/categoryRouter';
import { pool } from './database/mariaDb';
import { Signale } from 'signale';
import { ContractRoutes } from './contract/infrastructure/contractRouter';
import { PaypalRoute } from './NewPaypal/infrestructure/paypalRouter';

import "dotenv/config";
import { personRoutes } from './person/infrastructure/personRouter';
import { emailRouter } from './person/infrastructure/services/router/emailRouter';
import { userRouter } from './user/infrastructure/userRouter'; 


import { paymentRouter } from './payments/infraestrucuture/routers/paymentRouter';
import { paymentsRouter } from './paymentMethod/infraestructure/routes/paymentMethodRouter';


import dotenv from 'dotenv';


dotenv.config();

const app = express();
const signale = new Signale();
app.use(express.json());
app.use('/contract',ContractRoutes);
app.use("/Paypal", PaypalRoute);
app.use('/payments', paymentRouter)
// Ejemplo app.use('/leads',leadRouter);
app.use('/api/v1//Payment', paymentRouter);
app.use('/api/v1/paymentsMethod',paymentsRouter);
app.use('/api/v1/office', officeRouter);
app.use('/api/v1/category', categoryRoutes);
app.use("/api/v1/cards", paymentsRouter)
app.use('/api/v1/person', personRoutes);
app.use('/api/v1/person/email', emailRouter);
app.use('/api/v1/user', userRouter); // Cambiado a userRouter



app.listen(3001, () => {
    signale.success("Server online in port 3001");

});

