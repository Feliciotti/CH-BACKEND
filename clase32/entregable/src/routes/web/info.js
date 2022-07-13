import process from 'process';

import { Router } from 'express';
import { numcpus } from '../../../server.js';
import { logger } from '../../logs/logger.js';

//-----------------------------------------------------

const INFO = Router();

INFO.route('/info')
    .get((req, res) => {

        logger.info('ok')

        res.status(200).json(`
            Sistema operativo: ${process.platform}
            Versión NODE: ${process.version}
            Memoria total reservada: ${process.memoryUsage.rss()}
            Path de ejecución: ${process.execPath}
            ID del preceso: ${process.pid}
            Directorio actual de trabajo: ${process.cwd()}
            Núcleos: ${numcpus}
        `)

    });

INFO.route('/info-debug')
    .get((req, res) => {

        logger.info('ok')

        res.send(console.log(`
            Sistema operativo: ${process.platform}
            Versión NODE: ${process.version}
            Memoria total reservada: ${process.memoryUsage.rss()}
            Path de ejecución: ${process.execPath}
            ID del preceso: ${process.pid}
            Directorio actual de trabajo: ${process.cwd()}
            Núcleos: ${numcpus}
            `)
        )
    });

export { INFO }
