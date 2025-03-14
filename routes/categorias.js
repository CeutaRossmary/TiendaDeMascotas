var express = require('express');
var router = express.Router();

const categoriaController =require('../controllers/categoriasController')
/* GET home page. */
router.get('/', categoriaController.index)
 


module.exports = router;