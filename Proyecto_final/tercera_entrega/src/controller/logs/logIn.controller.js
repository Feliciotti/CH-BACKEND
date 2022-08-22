import passport from 'passport';
import '../../middleware/passport/local.js'

async function login(req, res) {
    await res.render('login')
}

async function loginError(req, res) {
    await res.render('logInErr');
}

// async function loginPost(req, res) {
//     await passport.authenticate('local-login',
//         {
//             successRedirect: '/home',
//             failureRedirect: '/login-error'
//         }
//     );
// }


const loginPost =
    await passport.authenticate('local-login',
        {
            successRedirect: '/home',
            failureRedirect: '/login-error'
        }
    );

export {
    login,
    loginPost,
    loginError
}