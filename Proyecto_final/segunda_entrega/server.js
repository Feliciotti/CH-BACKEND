//------------------- DEPENDENCIAS -------------------
import 'dotenv/config';
import express from 'express';

import { productsRouter, cartRouter } from './src/routes/index.js';

//------------------- server settings -------------------

const app = express();

// server settings
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static('./public'))


//------------------- Routes -------------------

app.use(cartRouter)
app.use(productsRouter)


// ------------------- PORT -------------------

const PORT = process.env.PORT || 4000

const server = app.listen(PORT, () => {
    console.log(`Servidor http esuchando en el puerto ${server.address().port}`)
});
server.on("error", error => console.log(`Error en el servidor ${error}`));