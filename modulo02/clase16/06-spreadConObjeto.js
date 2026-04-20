let usuario = {
    nombre: "Juan",
    edad: 25
}

let copia = { ...usuario }

// QUeremos modificar una propiedad de la copia?

let actualizado = {
    ...usuario,
    edad: 30
}

console.log(actualizado.nombre) // "Juan"
console.log(actualizado.edad) // 30

// Crea un nuevo objeto con ese cambio

// ¿Que pasa si queremos agregar una propiedad?
let nueva = {
    ...usuario,
    pais: "Argentina"
}

// Es una copia de usuario, con una nueva propiedad : "Argentina"

// Tambien podemos unir objetos

let a = { nombre: "Juan" }
let b = { edad: 25 }

let resultado = { ...a, ...b }
console.log(resultado) // { nombre: "Juan", edad: 25 }


// Spread operator hace una "copia superficial"

let usuarioFinal = {
    nombre: "Juan",
    direccion: {
        ciudad: "Buenos Aires"
    }
}

// usuarioFinal.direccion.ciudad

let copiaFinal = { ...usuarioFinal }

console.log(usuarioFinal)
// Si reescribimos de copiaFinal la ciudad, que pasa?
copiaFinal.direccion.ciudad = "Cordoba"
console.log(usuarioFinal)

// Como hacemos una copia "profunda"?

// Opcion 1, spread al objeto interno

let copiaFinal2 = {
    ...usuarioFinal,
    direccion: { ...usuarioFinal.direccion }
}

// Opcion 2, clon estructurado, y es la mas moderna
let copiaFinal3 = structuredClone(usuarioFinal)
// Hace una copia profunda REAL
