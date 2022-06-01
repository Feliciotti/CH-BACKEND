import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

passport.use(
    'auth-google',
    new GoogleStrategy({
        clientID:
        "571976366952-lufgdp7d50q30eoq668s2l4qgp4tk4a4.apps.googleusercontent.com",
        clientSecret: "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",
        callbackURL: "http://localhost:8080/auth/google"
  },
    function(accessToken, refreshToken, profile, done) {
        const userProfile = profile
        done(null, userProfile);
  }
));

// passport.use(
//     'auth-google',
//     new OAuth2Strategy(
//         {
//         clientID:
//         "571976366952-lufgdp7d50q30eoq668s2l4qgp4tk4a4.apps.googleusercontent.com",
//         clientSecret: "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",
//         callbackURL: "http://localhost:8080/auth/google"
//     },
//         function(accessToken, refreshToken, profile, done) {
//             const userProfile = profile
//             done(null, userProfile);
//     }
// ));