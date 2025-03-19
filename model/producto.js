const productos = [
  {
    id: 1,
    sku: "SHG12",
    nombre: "cama",
    material: "madera",
    tamaño: "4*45*55",
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
    material: "metal",
    tamaño: "4*45*55",
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
    material: "vidrio",
    tamaño: "4*45*55",
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
    obtener
}