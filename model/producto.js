const guardar = require("../controllers/productosController");

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
const obtener = () =>{
    return productos;
}


module.exports ={
    obtener,
    guardar:function(data,res){
      var regs = productos.length + 1
     productos.push({
       id: regs,
       sku: data.sku,
       nombre: data.nombre,
       imagen: data.imagen, 
       imagen2: data.imagen2, 
       imagen3: data.imagen3, 
       material: data.material,
       tamano: data.tamano,
       color: data.color,
       peso: data.peso,
       id_especie: data.id_especie,
       id_categoria: data.id_categoria,
       disponible: data.disponible,
       estado: data.estado,
     });
}
}