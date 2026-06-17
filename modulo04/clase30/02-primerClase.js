// Crear nuesta primera clase

// Sintaxis:
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }
    saludar() {
        console.log(`Hola soy ${this.nombre}`)
    }
    mostrarEdad() {
        console.log(`${this.nombre} tiene ${this.edad} años`)
    }
}

// Crear objeto
const persona1 = new Persona("Jorge", 25)
// QUe hace new? Crea una instancia de Persona
const persona2 = new Persona("Gabriel", 33)

console.log(persona1)
console.log(persona2)

persona1.saludar()
persona2.saludar()

persona1.mostrarEdad()
persona2.mostrarEdad()