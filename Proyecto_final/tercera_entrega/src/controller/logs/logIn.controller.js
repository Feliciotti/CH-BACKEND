import passport from 'passport';
import '../../middleware/passport/local.js'

async function login(req, res) {
    await res.render('login')
}

async function loginError(req, res) {
    await res.render('logInErr');
}


function logout(req, res, next) {

    req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
};

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
    loginError,
    logout
}