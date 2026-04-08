// Crear un array con colores y mostrar el primero y el ultimo

let colores = ["Azul", "Blanco", "Rojo", "Magenta", "Rosa", "Verde", "Marron", "Gris", "Negro"]

// Mostramos el primero
console.log(colores[0])

// Mostramos el ultimo
console.log(colores[colores.length - 1])

// ------------------------------------------
// Crear un array de numeros y mostrar el segundo
let numeros = [4, 2, 6, 3, 9, 23, 82]

console.log(numeros[1])

// ------------------------------------------
// Crear un array vacio y agregarle 3 elementos
let arrayVacio = []

/* arrayVacio.push("Pimienta")
arrayVacio.push("Sal")
arrayVacio.push("Ajo") */
arrayVacio.push("Sal", "Pimienta", "Ajo")
console.log(arrayVacio)

// Eliminar el ultimo elemento de un array
numeros.pop()
console.log(numeros)

// Eliminar el primer elemnto de un array
numeros.shift()
console.log(numeros)

// ------------------------------------------
// crear un array, y agregarle un elemento
let productos = ["Mouse", "Teclado"]
productos.push("Monitor")
console.log(productos)

// ------------------------------------------
// Crear otro array de numeros, y mostrar la sumatoria de todos esos numeros
let numeros2 = [1, 2, 3, 4]
let sumatoria = 0

for (let i = 0; i < numeros2.length; i++) {
    sumatoria = sumatoria + numeros2[i]
}
console.log(sumatoria)

// Creamos otro array de numeros y mostramos cuantos elementos tiene, sin usar length
let numeros3 = [4, 2, 7, 1, 9, 11]
let cantidadElementos = 0

for (let i = 0; i < numeros3.length; i++) {
    cantidadElementos = cantidadElementos + 1
}
console.log(cantidadElementos)

// Mostramos solo los elementos pares
for (let i = 0; i < numeros3.length; i++) {
    if (numeros3[i] % 2 == 0) {
        console.log(numeros3[i])
    }
}