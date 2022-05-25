import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import FileStoreModule from "session-file-store";
const FileStore = FileStoreModule(session);

const app = express();

app.use(cookieParser());
app.use(session ( {
    store: new FileStore({path: './sessions', ttl: 10, retries: 0}),
    secret: 'sfskdfskdfs',
    resave: false,
    saveUninitialized: false
}));

app.get('/', (req, res) =>{
    res.send('server ok')
});

app.get('/con-session', (req, res) =>{
    if (req.session.contador){
        req.session.contador++;
        res.status(200).send(`Usted ha venido a joder ${req.session.contador} veces`)
    } else {
        req.session.contador = 1;
        res.status(200).send('Hola')
    }
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