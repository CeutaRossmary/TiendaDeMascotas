var express = require('express');
var router = express.Router();

const productoController =require('../controllers/productosController');

/* GET home page. */
router.get('/', productoController.index)
router.get('/crear', productoController.create)
router.post('/', productoController.guardar)
 


module.exports = router;
