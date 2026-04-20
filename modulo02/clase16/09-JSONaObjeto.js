let usuario = {
    nombre: "Juan",
    edad: 25
}

// Lo pasamos a JSON

let json = JSON.stringify(usuario)

console.log(json)

// Para pasar el JSON a objeto

let objeto = JSON.parse(json)
console.log(objeto)