import express from 'express';
import { Signale } from 'signale';
import "dotenv/config";
import { personRoutes } from './accessManagement/person/infrastructure/routes/personRouter';

const app = express();
const signale = new Signale();

app.use(express.json());
app.use('/api/v1/person', personRoutes);

app.listen(3000, () => {
    signale.success("Server online in port 3000");
});