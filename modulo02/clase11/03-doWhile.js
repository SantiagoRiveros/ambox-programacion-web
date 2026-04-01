/* 
do {
    CODIGO
} while (CONDICION)
*/

// La diferencia clave: SE EJECUTA AL MENOS UNA VEZ

let i = 0

do {
    console.log(i)
    i++
} while (i < 5)

do {
    console.log("ESTO SE EJECUTA UNA SOLA VEZ")
} while (i === "HOLA")

while (i === "HOLA") {
    console.log("ESTO NO SE VA A EJECUTAR")
}

/* 
Bucle           Cuando usar
for             repeticiones connocidas (Tengo que ejecutar este codigo X veces)
while           depende de condicion
do while        se ejecuta al menos una vez (Aunque nunca se cumpla la condicion)
*/