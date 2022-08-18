import { isAuth } from '../../middleware/index.js'
import passport from 'passport';
import { Router } from 'express';

const home = Router();

home.route('/')
    .get((req, res) => {
        res.redirect('/login')
    });

home.route('/home')
    .get(isAuth, (req, res) => {
        res.render('home')
    });

export { home }