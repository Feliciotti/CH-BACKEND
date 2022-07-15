//-----------------------------------------
import express from 'express';
import { routerInfo, apiRandom, none } from './routes/index.js';

//------------------------------------------
const app = express();

//------------------ RUTAS -----------------
app.use('/info', routerInfo)
app.use('/api/random', apiRandom)
app.use(none)


//------------------ PUERTO ----------------

const PORT = process.env.PORT || 8080;


const server = app.listen(PORT, () => {
    console.log(`Nro. de proceso ${process.pid} está escuchando en puerto ${server.address().port}`)
});
server.on("error", error => console.log(`Error en el servidor ${error}`));