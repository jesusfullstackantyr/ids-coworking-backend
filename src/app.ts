import express from 'express';
import { Signale } from 'signale';
import "dotenv/config";
import { userRouter } from './accessManagement/user/infrastructure/routes/userRouter';

const app = express();
const signale = new Signale();

app.use(express.json());
app.use('/api/v1/user', userRouter);

app.listen(3000, () => {
    signale.success("Server online in port 3000");
});