//const guardar = require("../controllers/productosController");
const pool = require('../config/database')

const productos = [
  {
    id: 1,
    sku: "SHG12",
    nombre: "cama",
    imagen: "",
    imagen2: "",
    imagen3: "",
    material: "madera",
    tamano: "4*45*55",
    color: "Blanco",
    peso: "46kg",
    id_especie: 2,
    id_categoria: 4,
    disponible: true,
    estado: "si",
  },
  {
    id: 2,
    sku: "SHG12",
    nombre: "comedor",
    imagen: "",
    imagen2: "",
    imagen3: "",
    material: "metal",
    tamano: "4*45*55",
    color: "negro",
    peso: "46kg",
    id_especie: 2,
    id_categoria: 4,
    disponible: true,
    estado: "si",
  },
  {
    id: 3,
    sku: "SHG569",
    nombre: "televisor",
    imagen: "",
    imagen2: "",
    imagen3: "",
    material: "vidrio",
    tamano: "4*45*55",
    color: "Blanco",
    peso: "46kg",
    id_especie: 2,
    id_categoria: 4,
    disponible: true,
    estado: "si",
  },
];
const obtener = async () =>{
  let productos = await pool.query("select * from productos ")
  console.log(productos.rows)
  pool.end
    return productos.rows;
}


module.exports ={
    obtener,
    guardar: async function(data,files){

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
    } 
  }
