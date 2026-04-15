


let persona = {
    nombre: "Santiago",
    apellido: "Riveros",
    edad: 33,
    saludo: function () { console.log("Hola " + this.nombre) },

}

let crud = {
    create: function () { },
    update: function () { }
}

persona.saludo()

let auto = {
    marca: "Toyota",
    modelo: "Corolla",
    fecha: 2020
}

// Quisiera agregarle ahora el color
auto.color = "Rojo"
console.log(auto)

// Como eliminamos una propiedad?
delete auto.fecha
console.log(auto)

// Vamos a crear el objeto alumno que tendra nombre, edad y curso
let alumno = {
    nombre: "Mauro",
    edad: 31,
    curso: "Analisis de datos"
}

console.log(alumno.curso)
console.log(alumno)