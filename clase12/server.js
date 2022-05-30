//Dependencias
const express = require('express')
const {Server: HttpServer} =  require('http')
const {Server: IOServer} =  require('socket.io')

//Inicialización de app
const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer) 

app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname})
})

//Puerto y manejador de errores
const PORT = 3000
const server = httpServer.listen(PORT, () => {
    console.log(`Servidor http esuchando en el puerto ${server.address().port}`)
});
server.on("error", error => console.log(`Error en el servidor ${error}`)); 

const products = [];

const messages = [];

io.on('connection', function(socket) {
    console.log('A client is on line');

    //productos
    socket.emit('products', products);
    socket.on('new-product', (data) => {
        products.push(data);
        io.sockets.emit('products', products);
    });

    //mensajes
    socket.emit('messages', messages);
    socket.on('new-message', (data) => {
        messages.push(data);
        io.sockets.emit('messages', messages);
    });
});