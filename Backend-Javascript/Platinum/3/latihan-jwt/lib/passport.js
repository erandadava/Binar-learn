const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20").Strategy

passport.use(new GoogleStrategy({
  clientID:'301977206642-gpdmvjpnab41oqh4agm0nhmkj9b3vjck.apps.googleusercontent.com',
  clientSecret:'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',
  callbackURL:"http://localhost:3005/callback"
}, (accessToken, refreshToken, profile, done) =>{
  console.log(profile)
  return done(null, profile)
}))

passport.serializeUser((user, done) =>{
  return done(null, user)
})
passport.deserializeUser((user, done) =>{
  return done(null, user)
})

module.exports = passport

