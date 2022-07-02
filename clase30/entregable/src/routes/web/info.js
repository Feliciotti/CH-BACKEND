import { Router } from 'express';
import process from 'process';
import os from 'os';

const INFO = Router();

INFO.route('/info')
    .get((req, res) => {

        const numcpus = os.cpus().length;

        res.send(`
            Sistema operativo: ${process.platform} <br>
            Versión NODE: ${process.version} <br>
            Memoria total reservada: ${process.memoryUsage.rss()} <br>
            Path de ejecución: ${process.execPath} <br>
            ID del preceso: ${process.pid} <br>
            Directorio actual de trabajo: ${process.cwd()} <br>
            Núcleos: ${numcpus}
        `)
    });

export { INFO }
