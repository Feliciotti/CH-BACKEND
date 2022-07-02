import cluster from 'cluster';
import http from 'http';
import os from 'os';

const numcpus = os.cpus().length;

if(cluster.isPrimary) {
    console.log(`MASTER MASTER ${process.pid}`)
    for (let i = 0; i < numcpus; i++){
        cluster.fork()
    }
    cluster.on('listening', (worker, address) => {
        console.log(`${worker.process.pid} está escuchando en puerto ${address.port}`);
    })
} else {
    http.createServer((req, res) => {
        res.writeHead(200)
        res.end('hola mundo')
    })
    .listen(8081)
    console.log(`Worker ${process.pid} started`);

}