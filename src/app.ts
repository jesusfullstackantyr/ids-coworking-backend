import express from 'express';
import 'reflect-metadata';
import { Signale } from 'signale';
import { officeRouter } from './Office/infraestructure/officeRouter';
import { categoryRoutes } from './Category/infraestructure/categoryRouter';
import { initPool } from './database/mariaDb';

const app = express();
const signale = new Signale();

app.use(express.json());

app.use('/api/v1/office', officeRouter);
app.use('/api/v1/category', categoryRoutes);

initPool().then(() => {
    app.listen(3000, () => {
      signale.success("Server online in port 3000");
    });
});
