/* 
Trainee -> Junior -> Semi Senior -> Senior (Las jerarquias de programador)

Junior -> Hace soluciones largas para problemas cortos
Senior -> Hace soluciones cortas para problemas largos

Big O notation -> Es una forma de cuantificar la cantidad de operaciones/procesamientos que se realizan
*/

// Codigo JR

let esMayorDeEdad
let edad = 25

// codigo JR
if (edad >= 18) {
    esMayorDeEdad = true
} else {
    esMayorDeEdad = false
}

// codigo SSR
let edad2 = 25
let esMayorDeEdad2 = edad >= 18 ? true : false
//                    A            B        C
/* 
A -> la condicion
B -> el valor que se asigna si se cumple la condicion
C -> El valor que se asigna si no se cumple la condicion
Es decir, es como un if-else
*/

// Codigo SR
let esMayorDeEdad3 = edad >= 18
console.log(edad >= 18)

if (esMayorDeEdad3) {
    // PERMITO EL ACCESO A ALGO
} else {
    // NO LO PERMITO
}


// La solucion que requiere que ingresemos manualmente algo, se llama Hardcode