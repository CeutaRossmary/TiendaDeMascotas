var express = require('express');
var router = express.Router();

const productoController =require('../controllers/productosController');

var multer = require("multer");
var fecha = Date.now();

var rutaImagenes = multer.diskStorage({
  destination: function (request, file, callback) {
    console.log("entra 01")
    callback(null, "./public/images/");
    
  },


  filename: function (request, file, callback) {
    console.log(file);
    callback(null, fecha + "_" + file.originalname);
  },
});
var cargar = multer({ storage: rutaImagenes });
  console.log("entra 02", cargar);
/* GET home page. */
router.get('/', productoController.index)
router.get('/crear', productoController.create)
router.post('/', cargar.single("imagen"), productoController.guardar)
 router.get("/detalles/:id", productoController.detalle);
 


module.exports = router;

