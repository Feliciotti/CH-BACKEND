import { Router } from 'express';
// import { getUser } from '../../controller/web/user.controller.js';
import { isAuthenticated } from '../../middleware/index.js';

const home = Router();

home.route('/')
    .get((req, res) => {
        res.redirect('/home')
    });

home.route('/home')
    .get(isAuthenticated, async (req, res) => {
        const user = req.user.name
        console.log(user);
        res.render('home', { user })
    });

export { home }