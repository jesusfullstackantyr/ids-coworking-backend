import express from 'express';
import { officeRouter } from './Office/infraestructure/officeRouter';
import { categoryRoutes } from './Category/infraestructure/categoryRouter';
import { initPool } from './database/mariaDb';
import { Signale } from 'signale';
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
<<<<<<< HEAD


app.use('/api/v1//Payment', paymentRouter);
app.use('/api/v1/paymentsMethod',paymentsRouter);
app.use('/api/v1/office', officeRouter);
app.use('/api/v1/category', categoryRoutes);
app.use("/api/v1/cards", paymentsRouter)


initPool().then(() => {
    app.listen(3000, () => {
      signale.success("Server online in port 3000");
    });
  })
=======


app.use('/api/v1/person', personRoutes);
app.use('/api/v1/person/email', emailRouter);
app.use('/api/v1/user', userRouter); // Cambiado a userRouter



app.listen(3000, () => {
    signale.success("Server online in port 3000");

});

>>>>>>> 48d1e532503613c2f50f543b67e27736f19896df
