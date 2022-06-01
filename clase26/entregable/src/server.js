//dependencias
import express from "express";
import session from "express-session";
import FileStoreModule from "session-file-store";

//routes
import { homeRouter, loginRouter, singupRouter} from "./routes/index.js";



//--------------------------------------------------------------//
const FileStore = FileStoreModule(session);
const app = express();

//settings

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use(session ( {
    store: new FileStore({path: './sessions', ttl: 10, retries: 0}),
    secret: 'byAntonioBanderas',
    resave: false,
    saveUninitialized: false
}));

app.use(homeRouter)
app.use(loginRouter)
app.use(singupRouter)


const PORT = process.env.PORT || 3001
app.listen(PORT, () =>{
    console.log(`Servidor escuchando en el puerto ${PORT}`);
})