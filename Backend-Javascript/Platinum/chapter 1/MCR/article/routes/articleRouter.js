const router = require('express').Router()
const article =  require('../controllers/articleController')


router.post('/api/v0/article/', article.store)
router.get('/api/v0/article', article.list)
router.put('/api/v0/article/:articleId', article.update)
router.delete('/api/v0/article/:articleId', article.delete)

module.exports = router //agar router bisa di definisikan di index.js