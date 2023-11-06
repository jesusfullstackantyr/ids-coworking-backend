import express from 'express';
import { Signale } from 'signale';
//import "dotenv/config";
import { userRouter } from './accessManagement/user/infrastructure/routes/userRouter';
import dotenv from "dotenv";

dotenv.config();

const appid = process.env.APPID;
var PORT = process.env.SERVER_PORT;
const app = express();
const signale = new Signale();

app.use(express.json());
//app.use(express.json());
app.get("/", (req,res) => 
res.send(`appid: ${appid} home page: says hello!`))
app.use('/api/v1/user', userRouter);



app.listen(PORT, () => {
    signale.success(`Server run in port ${PORT}`);
});