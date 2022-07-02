import express from 'express';
const app = express();

const PORT = parseInt(process.argv[2]) || 8080;

app.get(('/data'), (req, res) => {
    console.log(`Port: ${PORT} -> fyh: ${Date.now()}`);
    res.send(
        `Server express
        <span style='color:blueviolet;'>
            (Nginx)
        <span>
        en ${PORT} - <b>PID ${process.pid}</b> - ${new Date().toLocaleString()}`
    )
})

app.listen(PORT, (err) => {
    if (!err) {
        console.log(`Server express ${PORT} - PID WORKER ${process.pid}`);
    }
})
