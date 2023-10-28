import express from 'express';
import 'reflect-metadata';
import { Signale } from 'signale';
import { officeRouter } from './Office/infraestructure/officeRouter';
import { categoryRoutes } from './Category/infraestructure/categoryRouter';
import { initPool } from './database/mariaDb';
import { paymentRouter } from './payments/infraestrucuture/routers/paymentRouter';
import { paymentsRouter } from './paymentMethod/infraestructure/routes/paymentMethodRouter';

import dotenv from 'dotenv';

dotenv.config();

const app = express();
const signale = new Signale();
app.use(express.json());

app.use('/api/v1/payment', paymentRouter);
app.use('/api/v1/paymentsMethod', paymentsRouter);
app.use('/api/v1/office', officeRouter);
app.use('/api/v1/category', categoryRoutes);

const PORT = process.env.PORT;

initPool().then(() => {
  app.listen(PORT, () => {
    signale.success(`Server online in port ${PORT}`);
  });
});

// Ruta principal para mostrar el puerto actual
app.get('/', (req, res) => {
  res.send(`Esta solicitud se está manejando en el puerto ${PORT}`);
});

