import express from 'express';
import { Signale } from 'signale';
import "dotenv/config";

// import { personRoutes } from './person/infrastructure/personRouter';

const app = express();
const signale = new Signale();

app.use(express.json());
// Ejemplo app.use('/leads',leadRouter);


app.listen(3000, () => {
    signale.success("Server online in port 3000");
});