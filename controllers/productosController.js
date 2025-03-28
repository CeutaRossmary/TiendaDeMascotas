
var productoModel = require('../model/producto');

module.exports = {
    index: async function(req,res){
        const productos = await productoModel.obtener();
        res.render('productos/index',{productos :productos})
    },
    create:function(req,res){
        res.render('productos/crear')
    },

    guardar: async function(req,res){

     await productoModel.guardar(req.body,req.files,res)
      var productos_obterner = await productoModel.obtener()
      
      res.render('productos/index',{productos:productos_obterner})
    },

    detalle: async function(req,res){
      const id = req.params.id; // Obtiene el ID de la URL
      var productos_detalle = await productoModel.obtenerPorId(id,res);
      console.log(productos_detalle)
      res.render("productos/detalles", { productos: productos_detalle });
    }
}