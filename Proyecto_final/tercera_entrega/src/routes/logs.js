import {
    login,
    loginPost,
    loginError,
    logup,
    logupForm,
    logout
} from '../controller/index.js'
import { Router } from "express";

//---------------------------------------

const log = Router ()

log.route('/login')
    .get( login )
    .post( loginPost );

log.route('/login-error')
    .get( loginError );

log.route('/logup')
    .get( logupForm )
    .post( logup );

log.route('/logout')
    .get( logout )

export { log }