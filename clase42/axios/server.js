import express from "express";
import axios from "axios";
import got from "got";

const app = express()

// app.get('/posts', async (req, res) =>{
//     try{
//         const response = await axios.get(
//             'https://jsonplaceholder.typicode.com/posts'
//         );
//         res.send(response.data)
//     }catch(err) {
//         console.log(err);
//     }
// })

app.get('/posts', async (req, res) =>{
    try{
        const response = await got(
            'https://jsonplaceholder.typicode.com/posts'
        );
        res.send(response.body)
    }catch(err) {
        console.log(err);
    }
})

app.listen(3000, () =>{
    console.log('connected on port 3000');
})