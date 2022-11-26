const passport = require('passport');
const localStrategy = require('passport-local');
const bcrypt = require('bcrypt');

const { User } = require('../models')

const authenticate = async(username, password, done) => {
  try {
    const user = await User.findOne({
      where:{
        username: username
      }
    })

    if (!user) {
      return done(null, false, {
        message: "User not found"
      })
    }

    const isValidPassword = bcrypt.compareSync(password, user.password)

    if (!isValidPassword) {
      return done(null, false, {
        message: "Paswword tidak sama"
      })
    }
    
  } catch (error) {
    return done(null, false, {
      message: error.message
    })
  }
}

passport.use(new localStrategy({
  usernameField:'username',
  passwordField:'password',
}), authenticate)

// serialize digunakan untuk membuat session
passport.serializeUser((User, done) => {
  return done(null, User.id)
})

passport.deserializeUser(async (id, done) => {
  const user = await User.findByPk(id)
  return done(null, user)
})

module.exports = passport