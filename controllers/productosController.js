module.exports = {
    index:function(req,res){
        res.render('productos/index')
    },
    create:function(req,res){
        res.render('productos/crear')
    },
    guardar:function(req,res){
      console.log(req.body); // Para ver si llegan los datos del formulario
      res.send("Producto guardado"); // Respuesta de prueba
    }
}