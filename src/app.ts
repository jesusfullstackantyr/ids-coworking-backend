import express from 'express';
import { Signale } from 'signale';
import "dotenv/config";
import { personRoutes } from './person/infrastructure/personRouter';
import { emailRouter } from './person/infrastructure/services/router/emailRouter';
import { userRouter } from './user/infrastructure/userRouter'; 




const app = express();
const signale = new Signale();

app.use(express.json());


app.use('/api/v1/person', personRoutes);
app.use('/api/v1/person/email', emailRouter);
app.use('/api/v1/user', userRouter); // Cambiado a userRouter



app.listen(3000, () => {
    signale.success("Server online in port 3000");

});

