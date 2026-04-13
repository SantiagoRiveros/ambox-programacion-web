let numeros = [11, 8, 92, 7, 23, 1, 3]

// Queremos devolver solo los que son mayor a 10

let mayor = numeros.filter((num) => { return num > 10 })

console.log(mayor)

let strings = ["Hola", "mar", "Medico", "Motocicleta"]

let stringsLargos = strings.filter((string) => { return string.length > 5 })

console.log(stringsLargos)

// Filtrar nombres que su primera letra sea "A"

let nombres = ["Ana", "Carlos", "Aristobulo", "Leandro", "Felipe"]

// Los strings los podemos tratar como arrays, ejemplo -> "Carlos" = ["C", "A", "R", "L", "O", "S"]

let nombresConA = nombres.filter((nombre) => { return nombre[0] === "A" })

console.log(nombresConA)

// metodo reduce
// Toma todos los elementos de un array y los devuelve en un valor
let ventas = [300, 600, 100]

let totalVentas = ventas.reduce((acumulador, elemento) => acumulador + elemento, 0)
// acumulador = es una variable que vive solo dentro del reduce que sirve para ir "acumulando"
// 0 -> es el valor inicial del acumulador

console.log(totalVentas)

/* 
iteracion           acumulador          elemento            resultado
1                   0                   300                 300
2                   300                 600                 900
3                   900                 100                 1000
*/