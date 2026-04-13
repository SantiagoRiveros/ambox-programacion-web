let precios = [100, 200, 300]

for (let i = 0; i < precios.length; i++) {
    console.log(precios[i] * 2)
}

// ¿Que vamos a hacer? Usar el metodo map para recorrer un array y crear uno nuevo con los precios nuevos

let nuevoArray = precios.map((indice) => { return indice * 2 })

/* 
Recorre cada elemento
Aplica "transformacion"
devuelve nuevo array
*/

console.log(nuevoArray)

let nombres = ["Juan", "Carlos", "Roberto"]

console.log(nombres.map((elemento) => { return "Hola " + elemento }))

// No se olviden el return, sino devuelve undefined

// Metodo filter

let numeros = [1, 2, 3, 4, 5]

let pares = numeros.filter((num) => { return num % 2 === 0 })

console.log(pares)