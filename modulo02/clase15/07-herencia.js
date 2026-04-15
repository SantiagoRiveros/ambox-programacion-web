class Animal {
    constructor(nombre) {
        this.nombre = nombre
    }
    hacerSonido() {
        console.log("Sonido generico de animal")
    }
}

// Tal vez tenemos varias clases de animales y queremos generar subclases
// Como hacemos para llamar al constructor de la clase padre? con super
class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre),
            this.raza = raza
    }
    hacerSonido() {
        console.log("Guau")
    }
}

// El extends, indica que Perro como clase hereda todas las propiedades y metodos que conlleva la clase Animal
let beta = new Perro("Beta", "Mestizo")

beta.hacerSonido()

class Loro extends Animal {
    constructor(nombre, habla) {
        super(nombre),
            this.habla = habla
    }
    mostrarSiHabla() {
        if (this.habla) {
            console.log("El loro " + this.nombre + " habla.")
        } else {
            console.log("El loro " + this.nombre + " no habla.")
        }
    }
}

let pepeLoro = new Loro("Pepe", true)

pepeLoro.mostrarSiHabla()

