// import { logupGet, logupPost } from "../../controller/index.js";
// import { Router } from "express";

// //---------------------------------------

// const logupLink = Router ()

// logupLink.route('/logup')
//     .get( logupGet )
//     .post( logupPost )

// export { logupLink }

import { Router } from 'express';
import passport from 'passport';

const logUp = Router();

logUp.route('/logup')
    .get((req, res) => {
        res.render('logup');
    })
    .post(passport.authenticate('local-logup',
        {
            successRedirect: '/login',
            failureRedirect: '/logup-error'
        }),
    );

export { logUp }