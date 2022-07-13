//-----------------------------------------
import compression from 'compression';
import express from 'express';
import cluster from 'cluster';
import os from 'os';

import { INFO, apiRandom, none } from './src/routes/index.js';

//------------------ PUERTO ----------------
const PORT = parseInt(process.argv[2]) || 8080;

//------------------------------------------

const modCluster = process.argv[3] == 'CLUSTER'

const numcpus = os.cpus().length;

export { numcpus } /// exporto para mostrarlo en la ruta INFO

if (modCluster && cluster.isPrimary) {
    
    for (let i = 0; i < numcpus; i++) {
        cluster.fork   
    }
    
    cluster.on('listening', (worker, address) => {
        console.log(`${worker.process.pid} está escuchando en puerto ${address.port}`);
    })

//------------------ RUTAS -----------------
} else {
    const app = express();
    app.use(compression())

    app.use(INFO)
    app.use(apiRandom)
    app.use(none)
    .listen(PORT)
    console.log(`Escuchando puerto ${PORT}`);
    console.log(`PID WORKER ${process.pid}`);
}

