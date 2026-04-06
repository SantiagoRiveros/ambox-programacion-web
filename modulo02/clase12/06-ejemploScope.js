// Scope global

let nombre = "Ana" // Global

function mostrarNombre() {
    console.log(nombre)
}

mostrarNombre()

/* 
¿Porque dentro de la funcion puedo utilizar la varialbe "nombre"?
AL estar declarado por fuera, esta variable ingresa a todos los "scopes" o encapsulamientos

*/


// Scope local

function prueba() {
    let edad = 25 // Esta variable existe solo en el contexto o scope de esta funcion
    console.log(edad)
}

prueba() // Esto si me muestra en consola la edad
// console.log(edad) // Error

if (true) {
    let ciudad = "Buenos Aires"
    console.log(ciudad) // Este si muestra en consola, porque ciudad aca existe
}

// console.log(ciudad) // Error

// Diferencia entre var vs let/const
// var -> scope global
// let/const -> scope de bloque

if (true) {
    var x = 5
    let y = 10
}

console.log(x) // Este da, el var puede "escalar"
console.log(y) // Error, el let, no escala

