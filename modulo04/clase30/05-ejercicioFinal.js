// Van a tener que crear una clase Producto
// Propiedades = nombre, precio, stock
// Van a tener que crearle 3 metodos:
// 1. Vender, recibe cantidad como argumento, y debe disminuir en esa cantidad el stock
// 2. Reponer, recibe cantidad, y se la suma al stock
// 3. Cambiar precio, recibe 2 propiedades, una es un string que dice si aumenta o disminuye, y la otra es la cantidad

class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
    }
    vender(cantidad) {
        if (cantidad <= this.stock) {
            this.stock -= cantidad
        } else {
            console.log("Stock insuficiente para realizar la venta")
        }
    }
    reponer(cantidad) {
        this.stock += cantidad
    }
    cambiarPrecio(operacion = "aumentar", precio = 0) {
        if (operacion == "aumentar" || operacion == "disminuir") {
            this.precio = operacion == "aumentar" ? this.precio + precio : this.precio - precio
        } else {
            console.log("Operacion no valida")
        }
    }
    mostrarInfo() {
        console.log(`Nombre: ${this.nombre}\nPrecio: $${this.precio}\nStock: ${this.stock}`)
    }
}

const producto1 = new Producto("Velador", 15000, 20)
producto1.reponer(5) // Le agregue 5 a stock, ahora es 25
producto1.vender(26) // Intento vender 26
producto1.vender(1) // Intento vender 1
producto1.mostrarInfo() // Aca el stock deberia dar 24
console.log("-------------------------")
producto1.cambiarPrecio("aumentar", 1000) // Aumento el precio, deberia dar 16000
producto1.mostrarInfo()
console.log("-------------------------")
producto1.cambiarPrecio("disminuir", 2000) // Disminuyo el precio, deberia dar 14000
producto1.mostrarInfo()