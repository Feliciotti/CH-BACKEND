//dependencias
import express from "express";
import passport from "passport";
import flash from 'connect-flash';
import session from "express-session";
import MongoStore from 'connect-mongo';

//routes
import { homeRouter, loginRouter, signupRouter} from "./routes/index.js";

import keys from "./keys.js";

//--------------------------------------------------------------//
// init
const app = express();
import './databases.js';
import './passport/local-auth.js'

//settings
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//middlewares
app.use(session({
    store: MongoStore.create({ mongoUrl: keys.mongodb.URI }),
    secret: 'byAntonioBanderas',
    resave: false,
    saveUninitialized: false,
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    app.locals.signinMessage = req.flash('signinMessage');
    app.locals.signupMessage = req.flash('signupMessage');
    app.locals.user = req.user;
    console.log(app.locals)
    next();
  });
  

//--------------------------------------------------------------//
// routes
app.use(homeRouter)
app.use(loginRouter)
app.use(signupRouter)

//--------------------------------------------------------------//
// port
const PORT = process.env.PORT || 3001
app.listen(PORT, () =>{
    console.log(`Servidor escuchando en el puerto ${PORT}`);
})