import express from 'express';
import { Signale } from 'signale';
import { personRoutes } from './person/infrastructure/personRouter';
import { emailRouter } from './person/infrastructure/services/router/emailRouter';


const app = express();
const signale = new Signale();

app.use(express.json());
app.use('/api/v1/person', personRoutes);
app.use('/api/v1/person/email', emailRouter);

app.listen(3000, () => {
    signale.success("Server online in port 3000");
});