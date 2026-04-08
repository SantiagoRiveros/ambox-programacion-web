//Imaginemos que queremos agregar o sacar elementos del array
let numeros = [1, 2, 3]

console.log(numeros)

// Supongamos que le quiero agregar un numero mas, el 4

// Uso el metodo push, que lo que hace, es agregar al final del array, un nuevo elemento
numeros.push(4)

console.log(numeros)

// Supongamos que tenemos otro array y le queremos quitar el ultimo elemento
let verduras = ["Acelga", "Repollo", "Papa", "Fideo"]

// con el metodo pop, le eliminamos el ultimo elemento
verduras.pop()

console.log(verduras)


// -----------------------------------------------

// Ahora imaginemos que queremos agregar un elemento al principio

// lo hacemos con el metodo unshift
let personas = ["Carlos", "Carolina", "Julian"]

personas.unshift("Santiago")
console.log(personas)

// Ahora queremos eliminarle el primer elemeto
// lo hacemos con el metodo shift
personas.shift()
console.log(personas)