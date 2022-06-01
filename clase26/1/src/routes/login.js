import { Router } from "express";

const login = Router();

login.get('/google', (req, res) =>
    res.send(`<h1>${req.user.displayName}</h1>
            <img src="${req.user.photos[0].value}">
            `)
);

export { login } 