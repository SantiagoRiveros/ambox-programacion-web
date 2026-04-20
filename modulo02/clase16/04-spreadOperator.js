// Que es spread operator?
// Es una forma de expandir o copiar objetos y arrays

// Pensalo asi -> el ... "abre" el contenido

// Caso 1 - copiar un array

let numeros = [1, 2, 3]

let copia = [...numeros]
// Es una copia literal de numeros, pero NO es numeros, es una copia

console.log(copia) // [1, 2, 3]

// Esto crea una copia real

// ------------------------------

// SIn spread, error tipico

let copiaFalsa = numeros
// ES NUMEROS, entonces, lo que vos le hagas a copiaFalsa, afecta a numeros, por eso "copiaFalsa", no es una copia, 
// es el mismo

console.log(numeros)

copiaFalsa.push(4)

// No deberia afectar a numeros... o si?
console.log(numeros)

/* 
¿Que pasa aca?
Cuando nosotros decimos copiaFalsa = numeros, estamos diciendo que copiaFalsa ES numeros, entonces cuando afectas a uno
sin quererlo, vas a afectar al otro.
por eso se usa el spread operator, para hacer copias, y no afectar al otro

*/

// numeros = [1, 2, 3, 4]

// COMO AGREGARLE ELEMENTOS:

// Que pasa si quiero a numeros, y agregarle mas, sin afectar el original?

let nuevosNumeros = [...numeros, 5, 6, 7, 8, 9]

console.log(nuevosNumeros)

let a1 = ["a", "b", "c"]
let a2 = ["d", "e", "f"]

let a3 = [...a1, ...a2]
console.log(a3)