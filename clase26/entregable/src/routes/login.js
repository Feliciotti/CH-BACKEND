import { Router } from 'express';
import path from 'path'

const loginRouter = Router();

loginRouter.route('/login')
    .get((req, res) => {
        const nameUser = req.session?.name
        if (nameUser) {
            res.redirect('/')
        } else {
            res.sendFile(path.join(process.cwd(), '../views/login.html'))
        }
    })
    .post((req, res) => {
        req.session.name = req.body.name
        res.redirect('/')
    })



loginRouter.route('/logout')
    .get((req, res) =>{
        const name = req.session?.name
        if (name) {
            req.session.destroy(err => {
                if (!err) {
                    res.render(path.join(process.cwd(), 'views/logout.ejs'), { name })
                } else {
                    res.redirect('/')
                }
            })
        } else {
            res.redirect('/')
        }
    });

export { loginRouter };