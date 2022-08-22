import passport from 'passport';

async function login(req, res) {
    await res.render('login')
}

async function loginError(req, res) {
    await res.render('logInErr');
}

async function loginPost(req, res) {
    passport.authenticate('login',
        {
            successRedirect: '/home',
            failureRedirect: '/login-error'
        }
    );
}

export {
    login,
    loginPost,
    loginError
}