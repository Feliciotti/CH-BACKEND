//-----------------------------------------------------------
// Modules
import express from 'express';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import handlebars from 'express-handlebars'

import { Server as HttpServer } from 'http'
import { Server as Socket } from 'socket.io'

//set
import settings from './settings.js';

//routes
import { home, cartRouter, productsRouter, productsApiRouter} from './routes/index.js';
import setSocket from './routes/ws/products.js'

//-----------------------------------------------------------
// iniciación del server, socket, api
const app = express()
const httpServer = new HttpServer(app)
const io = new Socket(httpServer)

//socket settings
io.on('connection', async socket => {
    // console.log('Nuevo cliente conectado!');
    setSocket(socket, io.sockets)
});

//server settings
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.engine('hbs', handlebars.engine({
    extname: '.hbs',
    defaultLayout: 'main.hbs',
}))

app.set('view engine', 'hbs')
app.set('views', './views')

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

//-------------------- RUTAS -------------------------------

// API
app.use(productsApiRouter)

// Web
app.use(home)
app.use(cartRouter)
app.use(productsRouter)


//------------------ Puerto e incio ---------------------------
//
const PORT = process.env.PORT || 4000
const server = app.listen(PORT, () => {
    console.log(`Servidor http esuchando en el puerto ${server.address().port}`)
});
server.on("error", error => console.log(`Error en el servidor ${error}`));
