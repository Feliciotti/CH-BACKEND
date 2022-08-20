// import {
//     logIn,
//     logInPost,
//     logInError
// } from '../../controller/index.js'
// import { Router } from 'express';


// //---------------------------------------

// const loginLink = Router();

// loginLink.route('/login')
//     .get( logIn )
//     .post( logInPost )

// loginLink.route('/login-error')
//     .get( logInError )

// export { loginLink }

import { Router } from 'express';
import passport from 'passport';

const logs = Router();

logs.route('/login')
    .get((req, res) => {
        res.render('login');
    })
    .post(passport.authenticate('local-login',
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