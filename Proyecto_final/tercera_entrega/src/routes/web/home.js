import { Router } from 'express';
import { isAuthenticated } from '../middleware/index.js';

const home = Router();

home.route('/')
    .get((req, res) => {
        res.redirect('/home')
    });

home.route('/home')
    .get(isAuthenticated, async (req, res) => {
        const user = await req.user.name
        console.log(user);
        res.render('home', { user })
    });

export { home }