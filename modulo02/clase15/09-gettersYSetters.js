class Persona {
    constructor(nombre) {
        this._nombre = nombre
    }
    get nombre() {
        return this._nombre
    }
    set nombre(nuevoNombre) {
        if (nuevoNombre.length === 0 || typeof nuevoNombre !== "string") {
            return
        } else {
            this._nombre = nuevoNombre
        }

    }
}

const p = new Persona("Santiago")
console.log(p.nombre)
p.nombre = ""
console.log(p.nombre)
p.nombre = 1
console.log(p.nombre)
p.nombre = true
console.log(p.nombre)
p.nombre = "Fernando"
console.log(p.nombre)

/* 
Con esto podriamos agregarle iva a un producto
set precio(valor){
    this.precio = valor * 1.21
}

*/