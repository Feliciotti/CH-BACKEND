import { Router } from "express";

import {
    login,
    // loginPost,
    loginError,
    logup,
    logupForm,
    logout
} from '../controller/index.js'
// import multer from '../libs/multer.js';

//---------------------------------------

const log = Router ()

log.route('/login')
    .get( login )
    // .post( loginPost );

log.route('/login-error')
    .get( loginError );

log.route('/logup')
    .get( logupForm )
    .post(/*multer.single('img'),*/ logup );

log.route('/logout')
    .get( logout )

//---------------------------------------

export { log }