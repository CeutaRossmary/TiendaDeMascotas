
var productoModel = require('../model/producto');

module.exports = {
    index: async function(req,res){
        const productos = await productoModel.obtener();
        console.log(productos)
        res.render('productos/index',{productos :productos})
    },
    create:function(req,res){
        res.render('productos/crear')
    },
    guardar: async function(req,res){
        
   
     await productoModel.guardar(req.body,req.files,res)
      var productos = productoModel.obtener()
      res.render('productos/index',{productos:productos})
    },
    detalle:function(req,res){
        console.log(req.params.id)
        res.render('productos/detalles')
    }
}