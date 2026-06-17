/* const alumno1 = {
    nombre: "Juan",
    edad: 25,
    curso: "Javascript"
}

const alumno2 = {
    nombre: "Pedro",
    edad: 30,
    curso: "React"
}

const alumno3 = {
    nombre: "Ana",
    edad: 22,
    curso: "Aplicaciones Moviles"
}
 */

class Alumno {
    constructor(nombre, edad, curso) {
        this.nombre = nombre
        this.edad = edad
        this.curso = curso
    }
}
const alumno1 = new Alumno("Juan", 25, "Javascript")
const alumno2 = new Alumno("Pedro", 30, "React")
const alumno3 = new Alumno("Ana", 22, "Aplicaciones Moviles")

console.log(alumno1)
console.log(alumno2)
console.log(alumno3)