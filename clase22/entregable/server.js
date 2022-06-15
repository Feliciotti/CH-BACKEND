//------------------- DEPENDENCIAS -------------------
import { dirname } from 'path';
import express from 'express';
import { fileURLToPath } from 'url';
import handlebars from 'express-handlebars';

import { Server as HttpServer } from 'http';
import { Server as IOServer } from 'socket.io';

import { db } from './options/db.js'
import { ContainerSQL } from './container/classContainer.js'
import { FScontainer } from './container/msgssContainer.js';
import { normalizeMssgs } from './normalize/mssgs.js';

import { createNFakeProducts } from './mock/faker.js'

//------------------- server settings -------------------

// server, socket init
const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

// server settings
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.engine('hbs', handlebars.engine({
    extname: '.hbs',
    defaultLayout: 'index.hbs',
    layoutsDir: __dirname + '/views/layouts'
}))

app.set('view engine', 'hbs')
app.set('views', './views')

app.use(express.static('./public'))


//------------------- Routes -------------------

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname})
})

const products = createNFakeProducts(5)

app.get('/api/productos-test', (req, res) => {
    res.render('main', { products });

    })

//------------------- SOCKETS -------------------

const prdcts = new ContainerSQL( db, 'products');
const mssgs = new FScontainer('./db/messages/messages.json');

io.on('connection', async function(socket) {
    
    console.log('A client is on line');
    
    let products = await prdcts.getAll();
    let messages = await mssgs.getAll();
    
    //productos
    socket.emit('products', products)
    socket.on('new-product', (data) => {
        prdcts.save(data);
        io.sockets.emit('products', products);
    });
    
    //mensajes
    socket.emit('messages', messages);
    socket.on('new-message', (data) => {
        mssgs.save(data);
        io.sockets.emit('messages', normalizeMssgs(messages));
    });
});


//PUERTO Y MANEJADOR DE ERRORES
const PORT = 3002
const server = httpServer.listen(PORT, () => {
    console.log(`Servidor http esuchando en el puerto ${server.address().port}`)
});
server.on("error", error => console.log(`Error en el servidor ${error}`));