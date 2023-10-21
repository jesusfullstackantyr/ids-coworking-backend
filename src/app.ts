import express from 'express';
import { Signale } from 'signale';
import { officeRouter } from './Office/infraestructure/officeRouter';
import { categoryRoutes } from './Category/infraestructure/categoryRouter';
import { initPool } from './database/mariaDb'; // Asegúrate de importar desde la ubicación correcta



const app = express();
const signale = new Signale();

app.use(express.json());

app.use('/api/v1/office', officeRouter);
app.use('/api/v1/category', categoryRoutes);
// Ejemplo app.use('/leads',leadRouter);


// Inicializa el pool de conexiones y verifica la conexión
initPool().then(() => {
    // Luego, inicia el servidor
    app.listen(3000, () => {
      signale.success("Server online in port 3000");
    });
  });