import express from 'express';
import { Signale } from 'signale';
import { cardRoutes } from './cards/infraestructure/paymentRouter';



const app = express();
const signale = new Signale();

app.use(express.json());
// Ejemplo app.use('/leads',leadRouter);
app.use("/api/v1/cards", cardRoutes)

app.listen(3000, () => {
    signale.success("Server online in port 3000");
});