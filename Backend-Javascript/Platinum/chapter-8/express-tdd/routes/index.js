var express = require('express');
const baseController = require('../controllers/baseController');
var router = express.Router();

/* GET home page. */
router.get('/', baseController.hello);
router.get('/sum', baseController.sum);
router.get('/substract', baseController.substract);

module.exports = router;
