import express from 'express';
import { Signale } from 'signale';
import "dotenv/config";
import { userRouter } from './user/infraestructure/routes/userRouter';


const app = express();
const signale = new Signale();

app.use(express.json());
app.use('/api/v1/user', userRouter); // Cambiado a userRouter

app.listen(3000, () => {
    signale.success("Server online in port 3000");
});
