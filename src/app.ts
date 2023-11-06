import express from 'express';
import { Signale } from 'signale';
import "dotenv/config";
import { personRoutes } from './accessManagement/person/infrastructure/routes/personRouter';
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.SERVER_PORT;
const appid = process.env.APPID;

const app = express();
const signale = new Signale();

app.use(express.json());
app.use('/api/v1/person', personRoutes);

app.get("/", (req,res) => 
res.send(`appid: ${appid} home page: says hello!`))

app.listen(PORT, () => {
    signale.success(`Server run in port ${PORT}`)
});