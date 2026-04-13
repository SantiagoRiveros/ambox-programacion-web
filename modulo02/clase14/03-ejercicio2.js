let numeros = [32, 11, 20, 21, 19, 18, 64]

// Supongamos que quiero tomar solo los numeros pares, y con ellos, multiplicarlos por 2

let pares = numeros.filter((num) => { return num % 2 === 0 })
let duplicados = pares.map((num) => { return num * 2 })

console.log(duplicados)

// forEach 

// numeros.forEach(num => console.log(num))

function mostrar(elemento) {
    console.log(elemento)
}

numeros.forEach(num => mostrar(num))

// notificaciones.forEach(noti => mostrarEnPantalla(noti))
