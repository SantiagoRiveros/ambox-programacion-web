class Automovil {
    constructor(marca, modelo, color) {
        this.marca = marca
        this.modelo = modelo
        this.color = color
    }
    mostrarInfo() {
        console.log(`Marca: ${this.marca}\nModelo: ${this.modelo}\nColor: ${this.color}`)
    }
}

const auto1 = new Automovil("Toyota", "Corolla", "Negro")
auto1.mostrarInfo()

class TelefonoMovil {
    constructor(marca, modelo, almacenamiento) {
        this.marca = marca
        this.modelo = modelo
        this.almacenamiento = almacenamiento
    }
    mostrarInfo() {
        console.log(`Marca: ${this.marca}\nModelo: ${this.modelo}\nAlmacenamiento: ${this.almacenamiento}GB`)
    }
}
const celular1 = new TelefonoMovil("Iphone", "SE", 128)
celular1.mostrarInfo()

class Libro {
    constructor(titulo, autor, paginas) {
        this.titulo = titulo
        this.autor = autor
        this.paginas = paginas
    }
    mostrarInfo() {
        console.log(`Titulo: ${this.titulo}\nAutor: ${this.autor}\nPaginas: ${this.paginas}`)
    }
}

const libro1 = new Libro("Fundacion", "Isaac Asimov", 264)
libro1.mostrarInfo()