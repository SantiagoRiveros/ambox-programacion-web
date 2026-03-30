// Ahora... ¿Que hacemos con todo esto? ¿Como podemos evaluar una variable en javascript?

// if - else - else if

let edad = 17

let esMayor = edad >= 18

// Como hago para que me muestre en consola "Es mayor de edad" o "Es menor de edad"?
if (esMayor) {
    console.log("Es mayor de edad")
} else {
    console.log("Es menor de edad")
}

let nombre = "Santiago"

if (nombre == "Santiago") {
    console.log("Hola Santiago")
} else if (edad > 50) {
    console.log("Es mayor de 50")
} else {
    console.log("No permiido")
}