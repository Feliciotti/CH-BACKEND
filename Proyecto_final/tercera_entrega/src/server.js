//------------------- DEPENDENCIAS -------------------
import 'dotenv/config';
import path from 'path'
import express from 'express';
import passport from 'passport';
import bodyParser from 'body-parser';
import session from 'express-session';
import exphbs from 'express-handlebars';
import MongoStore from 'connect-mongo';
import cookieParser from 'cookie-parser';


import {
    log,
    home,
    profile,
    productsRouter,
    cartRouter
} from './routes/index.js';
import './middleware/passport/local.js'
import './db/mongoose.js'

//------------------- server settings -------------------
//initialization
const app = express();

//Session settings
app.use(cookieParser());
app.use(session({
    store: MongoStore.create({ mongoUrl: process.env.MONGO_DB_URI }),
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
app.set('view engine', '.hbs');
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    extname: 'hbs'
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

//folder to store public files (avatars)
app.use('/public', express.static(path.resolve('public')));


//------------------- Routes -------------------
app.use(
    log,
    home,
    cartRouter,
    productsRouter,
    profile
)


// ------------------- PORT -------------------

const PORT = process.env.PORT || 4000

const server = app.listen(PORT, () => {
    console.log(`Servidor http esuchando en el puerto ${server.address().port}`)
});
server.on("error", error => console.log(`Error en el servidor ${error}`));