import process from 'process';
import os from 'os';

const numcpus = os.cpus().length;

const processInfo = {
    'Sistema operativo': process.platform,
    'Versión NODE': process.version,
    'Memoria total reservada': process.memoryUsage.rss(),
    'Path de ejecución': process.execPath,
    'ID del preceso': process.pid,
    'Directorio actual de trabajo': process.cwd(),
    'Núcleos': numcpus
}

const entries = Object.entries(processInfo)

export { entries }