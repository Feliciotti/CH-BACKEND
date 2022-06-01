import express from "express";
import jwt from 'jsonwebtoken';
import { auth } from "./middleware/mid.js";

const app = express();

app.route('/')
    .get((req, res) => {
        res.send('works')
    });

app.route('/api/register')
    .post((req, res) => {
        const user = req.body;
        const token = jwt.sign({user}, 'anything_for_my_princess')
        res.json({
            token,
        })
    });

app.route('/api/protected')
    .get(auth, (req, res) => {
        res.send('protected')
});

const PORT = 3001
app.listen(PORT, () =>{
    console.log(`Servidor escuchando en el puerto ${PORT}`);
})