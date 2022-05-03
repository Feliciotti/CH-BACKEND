const express = require('express')
const {Server: HttpServer, get} =  require('http')
const {Server: IOServer} =  require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer) 

//PUERTO Y MANEJADOR DE ERRORES
const PORT = 3002
const server = httpServer.listen(PORT, () => {
    console.log(`Servidor http esuchando en el puerto ${server.address().port}`)
});
server.on("error", error => console.log(`Error en el servidor ${error}`));


app.use(express.static('./public'))
app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname})
})

//BASE DE DATOS Y MANEJO DE CLASES
const { db } = require('./options/db');
const { sqLITE } = require('./options/sqLITE')

const ContainerSQL= require('./container/classContainer')

const prdcts = new ContainerSQL( db, 'products');
const mssgs = new ContainerSQL( sqLITE, 'messagesRecord' );

// async function traerProductos() {
//     let productos = await prdcts.getAll();
//     console.log(productos);
// }
//traerProductos();



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
        io.sockets.emit('messages', messages);
    });
});
