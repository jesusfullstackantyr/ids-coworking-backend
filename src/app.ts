import express from 'express';
import { Signale } from 'signale';
import { personRoutes } from './accessManagement/person/infrastructure/routes/personRouter';
import { addressRoutes } from './accessManagement/address/infrastructure/routes/addressRouter';
import dotenv from "dotenv";

dotenv.config();

const appid = process.env.APPID;
var PORT = process.env.SERVER_PORT;
const app = express();
const signale = new Signale();

app.use(express.json());
app.get("/", (req,res) => 
res.send(`appid: ${appid} home page: says hello!`))
app.use('/api/v1/person', personRoutes);
app.use('/api/v1/address', addressRoutes)

app.listen(PORT, () => {
    signale.success(`Server run in port ${PORT}`);
});