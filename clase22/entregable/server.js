//------------------- DEPENDENCIAS -------------------
import express from 'express';

import { products } from './routes/products.js'
import { productsFaker } from './routes/faker.js'

//------------------- server settings -------------------

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

//------------------- ROUTES -------------------

app.use(products)
app.use(productsFaker)


//------------------- PORT -------------------

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor http esuchando en el puerto ${server.address().port}`)
});
server.on("error", error => console.log(`Error en el servidor ${error}`));