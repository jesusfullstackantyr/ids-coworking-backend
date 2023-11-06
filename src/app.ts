import express from 'express';
import { Signale } from 'signale';
import dotenv from 'dotenv';
import { ContractRoutes } from './invoiceManagement/contract/infraestructure/routes/contractRouter';

dotenv.config();

const app = express();
const signale = new Signale();
app.use(express.json());

app.use('/contract',ContractRoutes);



const SERVER_PORT = process.env.SERVER_PORT || 3001;

app.listen(SERVER_PORT, () => {
    signale.success("Server online in port 3001");
});

