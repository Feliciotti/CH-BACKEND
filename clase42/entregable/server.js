//------------------- DEPENDENCIAS -------------------
import 'dotenv/config';
import axios from 'axios';
import express from 'express';

import { productsRouter } from './src/routes/index.js';

//------------------- server settings -------------------

const app = express();

// server settings
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//------------------- Routes -------------------

app.use(productsRouter)


// ------------------- PORT -------------------

const PORT = process.env.PORT || 4000

const server = app.listen(PORT, () => {
    console.log(`Servidor http esuchando en el puerto ${server.address().port}`)
});
server.on("error", error => console.log(`Error en el servidor ${error}`));

// ------------------- EXPORTAR PUERTO PARA USAR EN TESTING -------------------
export { PORT }

// ------------------- TESTING MANUAL CON AXIOS -------------------
// axios.get(`http://localhost:${PORT}/productos`)
//     .then((response) => {
//         console.log(response.status, response.data);
//     })
//     .catch((error) =>{
//         console.log(error);
//     })

// axios.get(`http://localhost:${PORT}/productos/2`)
//     .then((response) => {
//         console.log(response.status, response.data);
//     })
//     .catch((error) =>{
//         console.log(error);
//     })

// axios.post(`http://localhost:${PORT}/productos`, {
//         title: 'Axios Cup',
//         price: 0,
//         thumbnail: 'www.somecup.axios.com',
//         desc: 'Axios Cup',
//         stock: 0,
//     })
//     .then((response) => {
//         console.log(response.status, response.data);
//     })
//     .catch((error) =>{
//         console.log(error);
//     })

// axios.put(`http://localhost:${PORT}/productos/5`, {
//         stock: 50
//     })
//     .then((response) => {
//         console.log(response.status, response.data);
//     })
//     .catch((error) =>{
//         console.log(error);
//     })


// axios.delete(`http://localhost:${PORT}/productos/6`)
//     .then((response) => {
//         console.log(response.status, response.data);
//     })
//     .catch((error) =>{
//         console.log(error);
//     })