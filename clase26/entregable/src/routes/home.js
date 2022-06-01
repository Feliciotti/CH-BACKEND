import path from 'path'
import { Router } from 'express';
import { middLogin } from '../middlewares/login.js';

const homeRouter = Router()

homeRouter.route('/')
    .get( middLogin, (req, res) =>{
    res.render(path.join(process.cwd(), './views/home.hbs'), { name: req.session.name })
    });

export { homeRouter };