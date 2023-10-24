import express from 'express';
import { Signale } from 'signale';
<<<<<<< HEAD
import { personRoutes } from './person/infrastructure/personRouter';
import { emailRouter } from './person/infrastructure/services/router/emailRouter';


import "dotenv/config";
import { userRouter } from './user/infrastructure/userRouter'; // Cambiado a userRouter


=======
import "dotenv/config";

import { personRoutes } from './person/infrastructure/personRouter';
>>>>>>> 4937744aa77bfc5f0fd945fc037deae94137f9d1

const app = express();
const signale = new Signale();

app.use(express.json());
<<<<<<< HEAD


app.use('/api/v1/person', personRoutes);
app.use('/api/v1/person/email', emailRouter);
app.use('/api/v1/user', userRouter); // Cambiado a userRouter

=======
app.use('/api/v1/person', personRoutes);
>>>>>>> 4937744aa77bfc5f0fd945fc037deae94137f9d1


app.listen(3000, () => {
    signale.success("Server online in port 3000");
<<<<<<< HEAD
});
=======
});
>>>>>>> 4937744aa77bfc5f0fd945fc037deae94137f9d1
