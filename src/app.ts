import express from 'express';
import { Signale } from 'signale';
import { officeRoutes } from './Office/infraestructure/officeRouter';
import { categoryRoutes } from './Category/infraestructure/categoryRouter';
import dotenv from 'dotenv';

dotenv.config(); 

const port = process.env.PORT;

const app = express();
const signale = new Signale();

app.use(express.json());

app.use('/api/v1/office', officeRoutes);
app.use('/api/v1/category', categoryRoutes);


app.listen(3000, () => {
    signale.success("Server online in port 3000");
});