import process from 'process';

console.log(
    'Sistema operativo: ' + process.platform +
    'Versión NODE: ' + process.version +
    'Memoria total reservada :' + process.memoryUsage.rss() +
    'Path de ejecución :' + process.execPath +
    'ID del preceso: ' + process.pid +
    'Directorio actual de trabajo: ' + process.cwd()
);