import { Router } from 'express';
import passport from 'passport';
import '../../passport/local.js';

const logs = Router();

logs.route('/login')
    .get((req, res) => {
        res.render('login');
    })
    .post(passport.authenticate('local-logIn',
        {
            successRedirect: '/home',
            failureRedirect: '/login-error'
        }
    ));

logs.route('/login-error')
    .get((req, res) => {
        res.render('logInErr');
    });

logs.route('/logout')
    .get((req, res) => {
        req.session.destroy(err => {
            res.redirect('/')
        })
    });

export { logs }