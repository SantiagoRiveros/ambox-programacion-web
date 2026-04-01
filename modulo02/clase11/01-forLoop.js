/* 
Lo que pongo en MAYUSCULA debe ser reemplazado por un valor en si, o es la estructura
for (INICIO, CONDICION, INCREMENTO){
    CODIGO
}

*/

let repeticiones = 10
for (let i = 1; i <= repeticiones; i++) {
    console.log(i)
}

/* 
1. let i = 0 → empieza
2. i < 5 → condición
3. ejecuta código
4. i++ → aumenta
5. repite
*/



for (let i = 10; i >= 1; i--) {
    console.log(i)
}
// i++ es lo mismo que decir i + 1

/*
1er iteracion:
i = 1
i <= repeticiones -> esto es true
entonces
console.log(i) -> aca i es 1
al terminar el bloque de codigo, le sumamos 1 a i entonces i = 2

2da iteracion
i = 2
i <= repeticiones -> true
console.log(i) -> i es 2 aca
luego i + 1 = 3

3er iteracion
i = 3
i <= repeticiones -> true
console.log(i) -> i es 3 aca
i + 1 = 4



*/



// iteracion = cada "vuelta" del bucle o cada repeticion

// 'for' es una palabra reservada de javascript, es decir no podemos usarla nada mas que para declarar un bucle

// let i = 0 <- es el punto de inicio de nuestro iterador

// i < repeticiones -> es la condicion para que se siga repitiendo el loop, es como si fuera un if, cuando esta condicion no es true, deja de iterar

// i++ -> es el cambio que se genera en nuestro puntero luego de ejecutar cada iteracion

console.log("MOSTRAR PARES DEL 1 al 10")

for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

/* 
i++ → suma 1
i-- → resta 1
i += 2 → suma 2

*/