<<<<<<< HEAD
import express from 'express';
import { Signale } from 'signale';
//import "dotenv/config";
import dotenv from "dotenv";
import { userRouter } from './accessManagement/user/infraestructure/routes/userRouter';

dotenv.config();

const appid = process.env.APPID;
var PORT = process.env.SERVER_PORT;
const app = express();
const signale = new Signale();

app.use(express.json());

app.get("/", (req,res) => 
res.send(`appid: ${appid} home page: says hello!`))
app.use('/api/v1/user', userRouter);



app.listen(PORT, () => {
    signale.success(`Server run in port ${PORT}`);
});
=======

import express from 'express';
import { Signale } from 'signale';
import dotenv from 'dotenv';

import { officeRouter } from './officeManagement/office/infraestructure/routes/officeRouter';
import { categoryRoutes } from './officeManagement/category/infraestructure/routes/categoryRouter';
import { ContractRoutes } from './contract/infrastructure/contractRouter';
import { PaypalRoute } from './NewPaypal/infrestructure/paypalRouter';
import { personRoutes } from './person/infrastructure/personRouter';
import { emailRouter } from './person/infrastructure/services/router/emailRouter';
import { userRouter } from './user/infrastructure/userRouter';
import { paymentRouter } from './invoiceManagement/payments/infraestructure/routers/paymentRouter';
import { paymentsRouter } from './invoiceManagement/paymentMethod/infraestructure/routes/paymentMethodRouter';



dotenv.config();

const app = express();
const signale = new Signale();
app.use(express.json());

app.use('/contract', ContractRoutes);
app.use("/Paypal", PaypalRoute);

//app.use('/payments', paymentRouter)
//app.use('/api/v1/Payment', paymentRouter);
app.use('/api/v1/Payment', paymentRouter);
<<<<<<< HEAD
app.use('/api/v1/paymentsMethod', paymentsRouter);
=======
app.use('/api/v1/payments_method',paymentsRouter);
>>>>>>> 2caa0d82c9ddea9a180f71afe5ac88e953eea7cf

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

>>>>>>> a1c5e27892dda8e739a686b4b651854b11438dea
