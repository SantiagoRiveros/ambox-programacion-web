let persona = {
    nombre: "Santiago",
    apellido: "Riveros",
    edad: 33,
    ocupacion: "Docente",
    estaEmpleado: true
}

// podemos acceder a una clave de este objeto con dot notation
console.log(persona.nombre)

// O podemos acceder con bracket notation
console.log(persona["nombre"])

// imaginemos que vamos a recibir de forma dinamica la clave a la que acceder, como hacemos?
let clave = "nombre"
// persona.clave <- esto no sirve
// persona["clave"] <- asi tampoco sirve
console.log(persona[clave])
