// Clase -> El plano de una casa
// Objeto -> La casa construida
// Imaginemos que la clase es un "molde" de objetos

class Persona {
    constructor(nombre, edad, ciudad) {
        this.nombre = nombre,
            this.edad = edad,
            this.ciudad = ciudad
    }
    saludar() {
        console.log("Hola soy " + this.nombre)
    }
}

const per1 = new Persona("Santiago", 31, "Berazategui")
const per2 = new Persona("Rodrigo", 32, "Quilmes")

per1.saludar()
per2.saludar()

class Auto {
    constructor(marca, modelo, fecha, precio) {
        this.marca = marca,
            this.modelo = modelo,
            this.fecha = fecha,
            this.precio = precio
    }
    mostrar() {
        console.log("El " + this.marca + " " + this.modelo + " del año " + this.fecha + " se vende en unos " + this.precio + " pesos")
    }
}

let corolla = new Auto("Toyota", "Corolla", 2020, 15000000)
corolla.mostrar()
console.log(corolla)