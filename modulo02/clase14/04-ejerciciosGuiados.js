// Pasar a mayusculas
let array1 = ["Hola", "Buen Dia", "Caracol", "Bienvenido"]

console.log(array1.map((palabra) => { return palabra.toUpperCase() })) // Uppercase = mayuscula

// FIltramos numeros mayores a 50
let array2 = [20, 70, 3, 28, 91, 120, 4, 9]

console.log(array2.filter((numero) => { return numero > 50 }))

// quiero sumar todos los numeros de array2

console.log(array2.reduce((acumulador, elemento) => acumulador + elemento, 0))

// Quiero sacar el promedio de array2

let promedio = array2.reduce((acumulador, elemento) => acumulador + elemento, 0) / array2.length

console.log(promedio)

// Quiero convertir array 2 a strings

let array2String = array2.map((numero) => { return String(numero) })

console.log(array2String)

// Y si quisiera multiplicar todos los numeros?

console.log(array2.reduce((acumulador, numero) => acumulador * numero, 1))