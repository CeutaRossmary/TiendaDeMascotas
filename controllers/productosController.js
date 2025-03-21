
var productoModel = require('../model/producto');

module.exports = {
    index:function(req,res){
        var productos = productoModel.obtener();
        console.log(productos)
        res.render('productos/index',{productos :productos})
    },
    create:function(req,res){
        res.render('productos/crear')
    },
    guardar:function(req,res){
      console.log(req.body); // Para ver si llegan los datos del formulario
      productoModel.guardar(req.body,res)
      var productos = productoModel.obtener()
      res.render('productos/index',{productos:productos})
    },
    detalle:function(req,res){
        console.log(req.params.id)
        res.render('productos/detalles')
    }
}