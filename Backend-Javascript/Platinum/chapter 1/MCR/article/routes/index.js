const router = require('express').Router()
const articleRouter =  require('./articleRouter')
const itemRouter =  require('./itemRouter')

router.use(articleRouter)
router.use(itemRouter)
module.exports = router //agar router bisa di definisikan di index.js