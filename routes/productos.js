var express = require('express');
var router = express.Router();

const productoController =require('../controllers/productosController');

var multer= require('multer')
var fecha =Date.now()

var rutaImagenes = multer.diskStorage(
{
  destination: function (request, file, callback) {
    callback(null, "../public/images/");
  },
  filename: function (request, file, callback) {
    callback(null,fecha+"_"+file.originalname);
  }

});

var cargar = multer({storage:rutaImagenes})
/* GET home page. */
router.get('/', productoController.index)
router.get('/crear', productoController.create)
router.post('/', cargar.single("imagen"), productoController.guardar)
 router.get("/detalles/:id", productoController.detalle);
 


module.exports = router;

