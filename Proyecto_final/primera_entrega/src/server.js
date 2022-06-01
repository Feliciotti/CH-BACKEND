//-----------------------------------------------------------
// Modules
import express from 'express';
import session from 'express-session';
import MongoStore from 'connect-mongo';

import { Server as HttpServer } from 'http'
import { Server as Socket } from 'socket.io'

import settings from './settings';

import { homeRouter, cartRouter, loginRouter, productsApiRouter, productsRouter} from './routes/index.js';


//-----------------------------------------------------------
// iniciación del server, socket, api
const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer) 

//server settings
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(session({
    store: MongoStore.create({ mongoUrl: settings.mongoAtlas.uri }),
    secret: 'I cannot tell you, its confidential',
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: {
        maxAge: 60000
    }
}))

//socket settings
io.on('connection', async socket => {
    addProductosHandlers(socket, io.sockets)
    addMensajesHandlers(socket, io.sockets)
});

//-----------------------------------------------------------
//Rutas---------
// API
app.use(productsApiRouter)

// Web
app.use(homeRouter)
app.use(cartRouter)
app.use(loginRouter)
app.use(productsRouter)


//-----------------------------------------------------------
//Puerto e incio
const PORT = process.env.PORT || 4000
const server = app.listen(PORT, () => {
    console.log(`Servidor http esuchando en el puerto ${server.address().port}`)
});
server.on("error", error => console.log(`Error en el servidor ${error}`));
