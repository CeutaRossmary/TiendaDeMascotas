var express = require('express');
var router = express.Router();

const productoController =require('../controllers/productosController');

var multer = require("multer");
var fecha = Date.now();

// Configuración de almacenamiento de imágenes
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/");
  },
  filename: function (req, file, cb) {
    cb(null, fecha + "_" + file.originalname);
  },
});

// Middleware de Multer
const cargar = multer({ storage: storage }).fields([
  { name: "imagen", maxCount: 1 },
  { name: "imagen2", maxCount: 1 },
  { name: "imagen3", maxCount: 1 },
]);
// Verifica que Multer está inicializado correctamente
console.log("Middleware Multer listo");
/* GET home page. */
router.get('/', productoController.index)
router.get('/crear',productoController.create)
router.post("/",cargar, productoController.guardar
);
 router.get("/detalles/:id", productoController.detalle);
 


module.exports = router;

