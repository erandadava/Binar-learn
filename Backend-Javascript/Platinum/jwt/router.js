const router = require('express').Router()
const authController = require('./controllers/authController')
const homeController = require('./controllers/homeController')
const auth = require('./middleware/auth')

// register
router.post('/register', authController.register)

// loginn
router.post('/login', authController.login)

router.get('/whoami', authController.whoami)

router.post('/refresh-token', authController.refreshToken)

router.get('/home', auth, homeController.home)

module.exports = router