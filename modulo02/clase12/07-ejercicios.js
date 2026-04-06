function multiplicar() {
    let x = 5
    let y = 3
    return x * y
}

console.log(multiplicar()) // Pero no puedo llamar aca, ni a la x ni a la y

const resta = (num1, num2) => num1 - num2

// Vamos a agregarle algo al resultado de la resta

let resultado = resta(9, 3) + 2 // 8
console.log(resultado)

// funcion con condicional

function esPar(numero) {
    return numero % 2 == 0 // devuelve True si el numero es par, devuelve false si el numero es impar
}

if (esPar(13)) {
    console.log("El numero 13 es par")
} else {
    console.log("El numero 13 es impar")
}

// FUncion que llama a otra funcion
function doble(numero) {
    return numero * 2
}

function mostrarDoble(numero) {
    console.log(doble(numero))
}

mostrarDoble(11)

// Funcion que no recibe parametros pero usa una variable global

let nombre = "Anita"

function mostrarNombre() {
    console.log("Hola " + nombre)
}

mostrarNombre()

function esMayorDeEdad(edad) {
    if (edad >= 18) {
        return "Es mayor de edad"
    } else {
        return "Es menor de edad"
    }

}

console.log(esMayorDeEdad(17))

function mostrarNombreCompleto(nombre, apellido) {
    return "Hola " + nombre + " " + apellido
}

console.log(mostrarNombreCompleto("Santiago", "Riveros"))