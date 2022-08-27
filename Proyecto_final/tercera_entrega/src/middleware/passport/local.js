import passport from 'passport';
import { Strategy } from 'passport-local';
import { User } from '../../model/User.model.js';

// -------------------------------

const LocalStrategy = Strategy;

passport.serializeUser((user, done) => {
    done(null, user.id)
});

passport.deserializeUser( async (id, done) => {
    const user = await User.findById(id);
    done(null, user)
});

passport.use('local-login', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, async (req, email, password, done) =>{
        const user = await User.findOne({email: email})

        if(!user){
            return done(null, false);
        }
        if(!user.comparePassword(password)) {
            return done(null, false)
        }
        return done(null, user);
    })
);

