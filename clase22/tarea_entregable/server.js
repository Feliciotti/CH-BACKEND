//------------------- DEPENDENCIAS -------------------
import express from 'express';

import { Server as HttpServer } from 'http';
import { Server as Socket } from 'socket.io';

import { productsFaker } from './routes/faker.js';

import productsSettings from './routes/ws/prdcts.js';
import messagesSettings from './routes/ws/mssgs.js';

//------------------- server settings -------------------

// server, socket init
const app = express();
const httpServer = new HttpServer(app);
const io = new Socket(httpServer);

// socket settings
io.on('connection', async socket => {
    productsSettings(socket, io.sockets)
    messagesSettings(socket, io.sockets)
});

// server settings
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

//------------------- ROUTES -------------------

app.use(productsFaker)

//------------------- PORT -------------------

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor http esuchando en el puerto ${server.address().port}`)
});
server.on("error", error => console.log(`Error en el servidor ${error}`));