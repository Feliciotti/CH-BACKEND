import { logup, logupForm } from "../../controller/index.js";
import { Router } from "express";

//---------------------------------------

const signup = Router ()

signup.route('/logup')
    .get( logupForm )
    .post( logup )

export { signup }

// import { Router } from 'express';
// import passport from 'passport';

// const logUp = Router();

// logUp.route('/logup')
//     .get((req, res) => {
//         res.render('logup');
//     })
//     .post(passport.authenticate('local-logup',
//         {
//             successRedirect: '/login',
//             failureRedirect: '/logup-error'
//         }),
//     );

// export { logUp }