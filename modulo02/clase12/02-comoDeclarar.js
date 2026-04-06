// Declaracion tradicional
function suma(numero1, numero2) {
    return numero1 + numero2
}

// llamado o ejecucion
suma(2, 3) // 5

// Funciones anonimas
const multiplicar = function (numero1, numero2) {
    return numero1 * numero2
}

// llamado
multiplicar(3, 3) // 9

// arrow function (el "mas moderno")
const restar = (num1, num2) => num1 - num2

restar(4, 1) // 3
/* 
Es importante entender que en la arrow function, cuando es de una sola linea, y no usamos las llaves {}
podemos luego de la flecha, escribir lo que se va a devolver sin la palabra return
ahora, si tiene mas de una linea, necesita las llaves, y el return
*/

const restar2 = (num1, num2) => {
    console.log("Hola")
    return num1 - num2
}