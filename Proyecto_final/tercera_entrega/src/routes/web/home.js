import { auth } from '../../middleware/index.js'
import { Router } from 'express';

const home = Router();

home.route('/')
    .get(auth, (req, res) => {
        res.redirect('/home')
    });

home.route('/home')
    .get(auth, (req, res) => {
        res.render('home')
    });

export { home }