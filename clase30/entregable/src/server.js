//-----------------------------------------
import express from 'express';
import { INFO, apiRandom } from './routes/index.js';
import cluster from 'cluster';
import http from 'http';
import os from 'os';

//------------------------------------------
const app = express();

//------------------ RUTAS -----------------
app.use(INFO)
app.use(apiRandom)


//------------------ PUERTO ----------------

const PORT = parseInt(process.argv[2]) || 8080;


const server = app.listen(PORT, () => {
    console.log(`Nro. de proceso ${process.pid} está escuchando en puerto ${server.address().port}`)
});
server.on("error", error => console.log(`Error en el servidor ${error}`));