import {
    logIn,
    logInPost,
    logInError
} from '../../controller/index.js'
import { Router } from 'express';


//---------------------------------------

const loginLink = Router();

loginLink.route('/login')
    .get( logIn )
    .post( logInPost )

loginLink.route('/login-error')
    .get( logInError )

export { loginLink }