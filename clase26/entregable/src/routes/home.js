import { Router } from 'express';
import { middLogin } from '../middlewares/login.js';

const homeRouter = Router()

homeRouter.route('/')
    .get( middLogin, (req, res) =>{
    res.render(path.join(process.cwd(), '../../views/home.ejs'), { name: req.session.name })
    });

export { homeRouter };