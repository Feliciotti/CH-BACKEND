import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";

const app = express();

app.use(cookieParser());
app.use(session({
    secret: 'smdskvksmd',
    resave: false,
    saveUninitialized: false //fuerza a una sesión no guardada a ser guardada y gestionada
}));

app.get('/', (req, res) =>{
    res.send('server ok')
});

app.get('/con-session', (req, res) =>{
    res.send('server ok')
});

app.get('/info', (req, res) =>{
    res.send({
        cookies: req.cookies,
        session: req.session
    })
});




const PORT = 8080
app.listen(PORT, () =>{
    console.log(`Servidor escuchando en el puerto ${PORT}`);
})