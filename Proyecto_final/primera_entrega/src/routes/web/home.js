import { Router } from 'express';
import { login } from '../../middlewares/index.js';

import path from 'path'

const homeRouter = new Router()

homeRouter.router('/home')
    .get(login, (req, res) => {
        res.render(path.join(process.cwd(), '/views/pages/home.ejs'), { nombre: req.session.nombre })
    });

export { homeRouter };