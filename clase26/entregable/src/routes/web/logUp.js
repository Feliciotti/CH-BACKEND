import { Router } from 'express';
import passport from 'passport';
import '../../passport/local.js';

const logUp = Router();

logUp.route('/logup')
    .get((req, res) => {
        res.render('logUp');
    })
    .post(passport.authenticate('local-logUp',
        {
            successRedirect: '/login',
            failureRedirect: '/logup-error'
        }),
    );

export { logUp }