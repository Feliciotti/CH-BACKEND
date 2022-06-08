//-----------------------------------------------------------
// Modules
import path from 'path';
import express from 'express';
import passport from 'passport';
import bodyParser from 'body-parser';
import session from 'express-session';
import exphbs from 'express-handlebars';
import cookieParser from 'cookie-parser';
import MongoStore from 'connect-mongo';

import { home, logs, logUp, INFO } from './routes/index.js';

import settings from './settings.js';

const app = express();
import './database.js'
import './passport/local.js';

//-----------------------------------------------------------

//Session
app.use(cookieParser() );
app.use(session({
    store: MongoStore.create({ mongoUrl: settings.mongoAtlas.URI }),
    secret: 'byAntionioBanderas',
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: {
        maxAge: 100000
    }
}))

app.use(passport.initialize());
app.use(passport.session());


// Motor de plantilla
app.set('views', path.join(path.dirname(''), 'views'));
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    extname: 'hbs'
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', '.hbs');


//------------------ RUTAS -----------------------------
app.use(home)
app.use(logs)
app.use(INFO)
app.use(logUp)

//------------------ PUERTO -----------------------------

const PORT = process.env.PORT || 4000
const server = app.listen(PORT, () => {
    console.log(`Servidor http esuchando en el puerto ${server.address().port}`)
});
server.on("error", error => console.log(`Error en el servidor ${error}`));
