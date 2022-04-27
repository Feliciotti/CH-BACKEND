const express = require('express')
const {Server: HttpServer} =  require('http')
const {Server: IOServer} =  require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer) 

//PUERTO Y MANEJADOR DE ERRORES
const PORT = 3000
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

const ContainerMessages = require('./container/classContainer')
const ContainerProducts = require('./container/classContainer')
const prdcts = new ContainerProducts(db);
const mssg = new ContainerMessages(sqLITE);

io.on('connection', function(socket) {
    console.log('A client is on line');

    //productos
    socket.emit('products', products);
    socket.on('new-product', (data) => {
        prdcts.saveProducts(data);
        io.sockets.emit('products', products);
    });

    //mensajes
    socket.emit('messages', messages);
    socket.on('new-message', (data) => {
        mssg.saveMessages(data);
        io.sockets.emit('messages', messages);
    });
});
