import express from 'express';
import passport from 'passport';

import { login } from './routes/login.js' //si no es un index hay que ponerle la extención

import './middlewares/google.js'

const app = express();

//middlewares
app.use(express.json());
app.use('/auth', passport.authenticate('auth-google', {
        scope: [
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email',
        ],
        session: false
    }),
    login
);

const PORT = 8080
app.listen(PORT, () =>{
    console.log(`Servidor escuchando en el puerto ${PORT}`);
})