// Extraer propiedades
// Renombrar
// Usar valores por defecto

let cliente = {
    id: 1011,
    nombre: "Carlos",
    apellido: "Gimenez",
    edad: 41,
    localidad: "Ensenada"
}

let { localidad: ubicacion = "Desconocida" } = cliente

console.log(ubicacion)