//  Declaracion
function saludar() {
    // Aca va el codigo
    console.log("Hola")
}

// Como se ejecuta?

// Ejecucion
saludar()

saludar()

saludar()

// console.log()

// Hagamos una funcion un poquitin mas compleja
function saludarNombre(nombre) {
    console.log("Hola " + nombre)
}

saludarNombre("Santiago")

saludarNombre("Ramon")

saludarNombre("Delfina")

// ¿Como devuelvo un valor?
function suma(numero1, numero2) {
    numero1 + numero2
}

console.log(suma(4, 5)) // aca me da undefined porque suma no me devuelve ningun numero, aunque los sume

function suma2(numero1, numero2) {
    // usamos la palabra reservada "return"
    return numero1 + numero2
}

console.log(suma2(11, 4))

/* 
La funcionalidad del return es "devolver" un valor cuando la funcioon sea llamada
ademas, "corta" la ejecucion de la funcion, es decir, cuando llega al return, se concluye la ejecucion
*/