import passport from 'passport';
import { Strategy } from 'passport-local';
import { User } from '../../models/User.model.js';

const LocalStrategy = Strategy;

passport.serializeUser((user, done) => {
    done(null, user.id)
});

passport.deserializeUser( async (id, done) => {
    const user = await User.findById(id);
    done(null, user)
});

// passport.use('local-logup', new LocalStrategy({
//         usernameField: 'email',
//         passwordField: 'password',
//         passReqToCallback: true
//     }, async (req, done) =>{
//         const {name, email, password, age, address, phoneNumber} = req.body
//         const user = await User.findOne({email: 'email'})

//         if(user){
//             return done(null, false);
//         }else {
//             const newUser = new User({name, email, password, age, address, phoneNumber})
//             newUser.password = await newUser.encryptPassword(password)

//             await newUser.save()
//             done(null, newUser)
//         }
//     })
// );

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

