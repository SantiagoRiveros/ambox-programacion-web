// Copiar un array y agregar 2 numeros
let numeros = [1, 2, 3]

let nuevosNumeros = [...numeros, 4, 5]

console.log(numeros)
console.log(nuevosNumeros)

// UNIR 2 ARRAYS
let a = [1, 2]
let b = [3, 4]

let c = [...a, ...b]
console.log(c)

// Objetos

// Copiar un objeto y cambiar una propiedad

let usuario = {
    nombre: "Juan",
    edad: 25
}

let usuarioActualizado = {
    ...usuario,
    edad: 30
}

console.log(usuario)
console.log(usuarioActualizado)

let usuarioConPais = {
    ...usuario,
    pais: "Argentina"
}

console.log(usuarioConPais)

// unir 2 objetos

let clienteA = { nombre: "Pedro" }
let clienteB = { localidad: "Berazategui" }

let clienteFinal = { ...clienteA, ...clienteB }

console.log(clienteFinal)

// caso final

let productoA = { nombre: "Velador" }
let productoB = { nombre: "Ventilador" }

let productoFinal = { ...productoA, ...productoB } // el ultimo gana
// El ultimo valor, pisa al anterior

console.log(productoFinal)