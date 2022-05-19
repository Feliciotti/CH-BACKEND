const express = require('express');
const app =  express();

//Server settings
app.set('port', 8080)

//Middlewares

//Routes
app.use(require('./routes/router'))
app.use(require('./routes/cart'))

//Static

//404
app.use((req, res, next) => {
    res.status(404).send('404 Not Found')
});

module.exports = app;