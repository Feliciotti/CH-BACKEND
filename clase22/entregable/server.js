//------------------- DEPENDENCIAS -------------------
import express from 'express';
import handlebars from 'express-handlebars';

import { Server as HttpServer } from 'http';
import { Server as IOServer } from 'socket.io';

import { sqLITE } from './options/sqLITE.js'
import { ContainerSQL } from './container/classContainer.js'

import { productsFaker } from './routes/faker.js'

//------------------- server settings -------------------

// server, socket init
const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

// server settings
app.engine('hbs', handlebars.engine({
    extname: '.hbs',
    defaultLayout: 'index.hbs',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials'
}))

app.set('view engine', 'hbs')
app.set('views', './views')
app.use(express.static('./public'))
app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname})
})


// rutas
app.use(productsFaker)

//------------------- SOCKETS -------------------

const mssgs = new ContainerSQL( sqLITE, 'messagesRecord' );

io.on('connection', async function(socket) {
    
    console.log('A client is on line');
    
    let messages = await mssgs.getAll();
    
    //mensajes
    socket.emit('messages', messages);
    socket.on('new-message', (data) => {
        mssgs.save(data);
        io.sockets.emit('messages', messages);
    });
});


//PUERTO Y MANEJADOR DE ERRORES
const PORT = 3002
const server = httpServer.listen(PORT, () => {
    console.log(`Servidor http esuchando en el puerto ${server.address().port}`)
});
server.on("error", error => console.log(`Error en el servidor ${error}`));