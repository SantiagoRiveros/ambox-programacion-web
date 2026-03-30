// operadores matematicos

let suma = 3 + 5 // da 8
let resta = 5 - 3 // da 2
let multiplicacion = 5 * 3 // da 15
let division = 9 / 3 // da 3
let modulo = 10 % 3 // aca da 1

// un ejemplo practico del modulo
let esPar = 5 % 2 == 0

// operadores de comparacion

let esIgual = 3 == 3 // esto da true
let esIgual2 = 3 == '3' // esto TAMBIEN da true
let esDesigual = 3 !== 'hola' // esto da true, porque es desigual
let esIgualEstrictamente = 3 === 3 // esto da true
let esIgualEstrictamente2 = 3 === '3' // esto da false, porque compara el tipo de dato y el valor

let esMayor = 3 > 2 //esto da true
let esMayorIgual = 3 >= 3 // esto da true
let esMenor = 3 < 2 // esto da false
let esMenorIgual = 3 <= 2 //esto da false

// logica de boole
// AND OR NOT (y, o, no)
// AND -> devuelve true cuando las dos expresiones que comparamos son true
true && true // true
true && false //false
false && true // false
false && false // false

// OR -> Devuelve true cuando alguna de las dos expresiones es true
true || true // true
true || false // true
false || true // true
false || false // false

// NOT <- invierte el estado de veracidad de algo
!true // false
!false // true