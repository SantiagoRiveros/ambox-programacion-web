class Producto {
    constructor(nombre, precio, categoria) {
        this.nombre = nombre,
            this.precio = precio,
            this.categoria = categoria
    }
    cambiarPrecio(nuevoPrecio) { this.precio = nuevoPrecio }
    mostrar() { return this.nombre + " sale unos " + this.precio + " pesos." }
}

let pizza = new Producto("Pizza Napolitana", 12000, "Pizzas")

console.log(pizza)
pizza.cambiarPrecio(3000)
console.log(pizza.nombre)
console.log(pizza.mostrar())