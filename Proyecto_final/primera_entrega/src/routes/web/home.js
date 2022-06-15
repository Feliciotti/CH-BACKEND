import { Router } from 'express';

const home = Router();

home.route('/')
    .get((req, res) => {
        res.redirect('/home')
    });

home.route('/home')
    .get((req, res) => {
        res.render('home')
    });

export { home }
