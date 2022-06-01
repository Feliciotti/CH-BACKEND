import path from 'path';
import passport from 'passport';

import { Router } from 'express';

const signupRouter = Router();

signupRouter.route('/signup')
    .get((req, res) =>{
        const nameUser = req.session?.name
        if (nameUser) {
            res.redirect('/')
        } else {
            res.render(path.join(process.cwd(), './views/signup.hbs'))
        }
    })
    .post(passport.authenticate('local-signup', {
            successRedirect: '/login',
            failureRedirect: '/signup',
            passReqToCallback: true
        })
     );

export { signupRouter };