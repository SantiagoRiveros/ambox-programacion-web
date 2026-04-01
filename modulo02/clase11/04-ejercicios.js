// mostrar del 1 al 10
console.log("Mostrar del 1 al 10")
for (let i = 1; i <= 10; i++) {
    console.log(i)
}
console.log("-----------------------")
console.log("Mostrar numeros pares del 1 al 20")
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

console.log("-----------------------")
console.log("Mostrar tabla del 5")
for (let i = 1; i <= 10; i++) {
    console.log(i * 5)
}

console.log("-----------------------")
console.log("contar hacia atras del 10 al 1")
for (let i = 10; i >= 1; i--) {
    console.log(i)
}
console.log("-----------------------")
console.log("Sumar del 1 al 5")

let contador = 0
for (let i = 5; i >= 1; i--) {
    contador += i
}
console.log(contador)