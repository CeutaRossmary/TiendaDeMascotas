//const guardar = require("../controllers/productosController");
const pool = require('../config/database')


const obtener = async () =>{
  let productos = await pool.query("select * from productos ")
  console.log(productos.rows)
  pool.end
    return productos.rows;
}


module.exports = {
  obtener,
  guardar: async function (data, files) {
    const imagen = files.imagen ? files.imagen[0].filename : null;
    const imagen2 = files.imagen2 ? files.imagen2[0].filename : null;
    const imagen3 = files.imagen3 ? files.imagen3[0].filename : null;

    producto_guardar = await pool.query(
      "INSERT INTO productos (sku, nombre, imagen, imagen2, imagen3, material, tamano, color, peso, especies_id, categoria_id, precio, disponible, estado) VALUES('" +
        data.sku +
        "', '" +
        data.nombre +
        "', '" +
        imagen +
        "', '" +
        imagen2 +
        "', '" +
        imagen3 +
        "', '" +
        data.material +
        "', '" +
        data.tamano +
        "', '" +
        data.color +
        "', '" +
        data.peso +
        "', '" +
        data.especies_id +
        "', '" +
        data.categoria_id +
        "', '" +
        data.precio +
        "', '" +
        data.disponible +
        "', '" +
        data.estado +
        "')"
    );

    pool.end;
  },

  obtenerPorId: async function (id) {
     try {
      producto = await pool.query("SELECT * FROM productos WHERE id = " + id);
      return producto.rows;
    } catch (error) {
      return error;
    }
  
  },
};
