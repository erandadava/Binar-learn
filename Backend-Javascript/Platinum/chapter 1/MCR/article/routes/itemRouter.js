const router = require('express').Router()
const item =  require('../controllers/itemController')


router.post('/api/v0/item/', item.storeItem)
router.get('/api/v0/item', item.listItem)
router.put('/api/v0/item/:itemId', item.updateItem)
router.delete('/api/v0/item/:itemId', item.deleteItem)

module.exports = router //agar router bisa di definisikan di index.js