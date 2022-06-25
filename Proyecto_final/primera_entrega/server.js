//------------------- DEPENDENCIAS -------------------
import express from 'express';

// import { Server as HttpServer } from 'http';
// import { Server as IOServer } from 'socket.io';

import { productsRouter, cartRouter } from './routes/index.js';

// import { FScontainer } from './container/class.js';

//------------------- server settings -------------------

// server, socket init
const app = express();
// const httpServer = new HttpServer(app);
// const io = new IOServer(httpServer);

// server settings
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static('./public'))


//------------------- Routes -------------------

app.use(cartRouter)
app.use(productsRouter)

//------------------- SOCKETS -------------------

// const prdcts = new FScontainer('./files/products.json');
// const mssgs = new FScontainer('./files/messages.json');

// io.on('connection', async function(socket) {
    
//     console.log('A client is on line');
    
//     let products = await prdcts.getAll();
//     let messages = await mssgs.getAll();
    
//     //productos
//     socket.emit('products', products)
//     socket.on('new-product', (data) => {
//         prdcts.save(data);
//         io.sockets.emit('products', products);
//     });
    
//     //mensajes
//     socket.emit('messages', messages);
//     socket.on('new-message', (data) => {
//         mssgs.save(data);
//         io.sockets.emit('messages', messages);
//     });
// });

// export { prdcts, mssgs}



// ------------------- PORT -------------------
const PORT = 3002
const server = httpServer.listen(PORT, () => {
    console.log(`Servidor http esuchando en el puerto ${server.address().port}`)
});
server.on("error", error => console.log(`Error en el servidor ${error}`));