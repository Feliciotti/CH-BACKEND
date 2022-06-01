import passport from 'passport';
import { Strategy } from 'passport-local';
import { User } from '../models/user.js';

const LocalStrategy = Strategy

passport.serializeUser((user, done) =>{
    done(null, user.id)
});

passport.deserializeUser(async (id, done) =>{
    const user = await User.findById(id);
    done(null, user)
});

//---------------------- SIGNUP ----------------------
passport.use('local-signup', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true

    }, async (req, email, password, done ) => {

        const user = await User.findOne({email: email})
        if(user){
            return done(null, false, req.flash('singupMessage', 'e-mail ya registrado'))
        
        } else{
            const newUser = new User();
            newUser.email = email;
            newUser.password = newUser.encryptPassword(password);
            await newUser.save()
            done(null, newUser)
        }
    })
);

//---------------------- LOGIN ----------------------
passport.use('local-login', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true

    }, async (req, email, password, done ) => {

        const user = await User.findOne({email: email})
        if(!user) {
            return done(null, false, req.flash('loginMessage', 'No se encontró el usuario'))
        } 
        if(!user.comparePassword(password)) {
            return done(null, false, req.flash('loginMessage','Contraseña incorrecta'))
        }

        done(null, user)
    })
);