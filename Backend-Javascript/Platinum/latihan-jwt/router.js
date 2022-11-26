const router = require('express').Router()
const passport = require('./lib/passport')
const authController = require('./controllers/authController')
const productController = require('./controllers/productController')
const auth = require('./middleware/auth')
// const homeController = require('./controllers/homeController')

// register
router.post('/register', authController.register)

// login
router.post('/login', authController.login)

// Product Crud
router.get('/product', auth, productController.list)
router.post('/product',auth, productController.store)
router.put('/product/:productId', auth, productController.update)
router.delete('/product/:productId', auth, productController.delete)


router.get('/oauth', passport.authenticate('google', {
    scope:['email', 'profile'],
  }
))
router.get('/callback', passport.authenticate('google', {
    successRedirect: 'https://google.com',
    failureRedirect: 'https://discord.com',
  }
))

// router.post('/refresh-token', authController.refreshToken)

// router.get('/home', auth, homeController.home)

module.exports = router