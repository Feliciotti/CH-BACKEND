import express from "express";
import session from "express-session";
import path from 'path'
import FileStoreModule from "session-file-store";
const FileStore = FileStoreModule(session);

const app = express();

app.use(session ( {
    store: new FileStore({path: './sessions', ttl: 10, retries: 0}),
    secret: 'byAntonioBanderas',
    resave: false,
    saveUninitialized: false
}));

function middleware(req, res, next) {
    if (req.session?.name) {
        next()
    } else {
        res.redirect('/login')
    }
}

app.get('/', middleware, (req, res) =>{
    res.render(path.join(process.cwd(), 'views/home.ejs'), { name: req.session.name })
});

app.post('/login', (req, res) => {
    req.session.name = req.body.name
    res.redirect('/')
})

app.get('/login', (req, res) =>{
    const nameUser = req.session?.name
    if (nameUser) {
        res.redirect('/')
    } else {
        res.sendFile(path.join(process.cwd(), 'views/partials/login.html'))
    }
});


app.get('/logout', (req, res) =>{
    const name = 'el cacas'
    if (name) {
        req.session.destroy(err => {
            if (!err) {
                res.render(path.join(process.cwd(), 'views/logout.ejs'), { name })
            } else {
                res.redirect('/')
            }
        })
    } else {
        res.redirect('/')
    }
});


const PORT = 8080
app.listen(PORT, () =>{
    console.log(`Servidor escuchando en el puerto ${PORT}`);
})