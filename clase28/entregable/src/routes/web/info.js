import { Router } from 'express';
import process from 'process';

const INFO = Router();

INFO.route('/info')
    .get((req, res) => {
        res.send(`
            Sistema operativo: ${process.platform}
            Versión NODE: ${process.version}
            Memoria total reservada: ${process.memoryUsage.rss()}
            Path de ejecución: ${process.execPath}
            ID del preceso: ${process.pid}
            Directorio actual de trabajo: ${process.cwd()}
        `)
    });

export { INFO }
