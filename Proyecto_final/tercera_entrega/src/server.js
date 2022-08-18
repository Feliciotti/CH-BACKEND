//------------------- DEPENDENCIAS -------------------
import 'dotenv/config';
import path from 'path'
import express from 'express';
import passport from 'passport';
import bodyParser from 'body-parser';
import session from 'express-session';
import exphbs from 'express-handlebars';
import cookieParser from 'cookie-parser';
import MongoStore from 'connect-mongo';

import {
    productsRouter,
    cartRouter,
    loginLink,
    logoutLink,
    logupLink
} from './routes/index.js';
import { mongo } from './config/index.js'
import './middleware/passport/local.js'

//------------------- server settings -------------------
//initialization
const app = express();

//Session settings
app.use(cookieParser() );
app.use(session({
    store: MongoStore.create({ mongoUrl: mongo.db.uri }),
    secret: 'byAntionioBanderas',
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: {
        maxAge: 100000
    }
}))

//passport
app.use(passport.initialize());
app.use(passport.session());

// Motor de plantilla

app.set('views', path.join(path.dirname(''), 'views'));
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    extname: 'hbs'
}));


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('./public'))

app.set('view engine', '.hbs');



//------------------- Routes -------------------

app.use(cartRouter)
app.use(productsRouter)
app.use(loginLink)
app.use(logoutLink)
app.use(logupLink)


// ------------------- PORT -------------------

const PORT = process.env.PORT || 4000

const server = app.listen(PORT, () => {
    console.log(`Servidor http esuchando en el puerto ${server.address().port}`)
});
server.on("error", error => console.log(`Error en el servidor ${error}`));