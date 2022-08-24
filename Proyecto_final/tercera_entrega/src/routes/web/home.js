// import { auth } from '../../middleware/index.js'
import { Router } from 'express';
// import { isAuthenticated } from '../../middleware/index.js';

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