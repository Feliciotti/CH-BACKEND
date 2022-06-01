import { Router } from 'express';
import passport from 'passport';
import path from 'path'

const loginRouter = Router();

loginRouter.route('/login')
    .get((req, res) => {
        const email = req.session?.email
        if (email) {
            res.redirect('/')
        } else {
            res.sendFile(path.join(process.cwd(), '../views/login.html'))
        }
    })
    .post(passport.authenticate('local-login', {
        successRedirect: '/',
        failureRedirect: '/login',
        passReqToCallback: true
    })
 );



loginRouter.route('/logout')
    .get((req, res) =>{
        const name = req.session?.name
        if (name) {
            req.session.destroy(err => {
                if (!err) {
                    res.sendFile(path.join(process.cwd(), '../views/logout.html'), { name })
                } else {
                    res.redirect('/')
                }
            })
        } else {
            res.redirect('/')
        }
    });

export { loginRouter };