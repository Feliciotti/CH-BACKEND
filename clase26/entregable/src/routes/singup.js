import { Router } from 'express';

const singupRouter = Router();

singupRouter.route('/login')
    .get((req, res) => {
        res.render('singup')
    })
    .post((req, res) => {
        req.session.name = req.body.name
        res.redirect('/')
    });

export { singupRouter };