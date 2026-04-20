let persona = {
    nombre: "blabla",
    apellido: "blabla",
    edad: 11,
    experienciaLaboral: [{}, {}, {}],
    aumentarSueldo: () => { },
}

// Acceder con dot notation:
console.log(persona.nombre)

//bracket notation:
console.log(persona["nombre"])

// Dinamico:
let clave = "nombre"

console.log(persona[clave])