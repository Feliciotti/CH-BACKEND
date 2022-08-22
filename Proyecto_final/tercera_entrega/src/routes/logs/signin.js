import {
    login,
    loginPost,
    loginError
} from '../../controller/index.js'
import passport from 'passport';
import { Router } from 'express';


//---------------------------------------

const signin = Router();

signin.route('/login')
    .get( login )
    .post( loginPost );

signin.route('/login-error')
    .get( loginError )

export { signin }

// import { Router } from 'express';
// import passport from 'passport';

// const logs = Router();

// logs.route('/login')
//     .get((req, res) => {
//         res.render('login');
//     })
//     .post(passport.authenticate('local-login',
//         {
//             successRedirect: '/home',
//             failureRedirect: '/login-error'
//         }
//     ));

// logs.route('/login-error')
//     .get((req, res) => {
//         res.render('logInErr');
//     });

// logs.route('/logout')
//     .get((req, res) => {
//         req.session.destroy(err => {
//             res.redirect('/')
//         })
//     });

// export { logs }