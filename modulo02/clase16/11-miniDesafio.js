let datos = {
    nombre: "Ana",
    edad: 20
};

/* 
copiar con spread
agregar email
convertir a JSON
volver a objeto
mostrar datos
*/

let copia = {
    ...datos,
    email: "ana@gmail.com"
}

let json = JSON.stringify(copia)

let objetoFinal = JSON.parse(json)
console.log(objetoFinal)