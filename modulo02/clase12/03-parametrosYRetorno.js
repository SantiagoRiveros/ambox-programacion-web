// Parametros o props, o propiedades, etc
function saludar(nombre) {
    console.log("Hola", nombre)
}


saludar("Juan")


// Retorno de valores
function sumar(a, b) {
    return a + b // Sin esta linea, sumar no devolveria nada
}

let resultado1 = sumar(2, 5)
console.log(resultado1) // 7

// Que pasa si yo llamo una funcion sin darle las propiedades
console.log(sumar())

// Como agregamos un valor por defecto(default) a las props?
function sumar2(a = 0, b = 0) { // ahora las props si yo no le paso alguna de ellas, va a tener el valor de 0
    return a + b
}

console.log(sumar2(2))
console.log(sumar2())
console.log(sumar2(3, "a")) // "3a"