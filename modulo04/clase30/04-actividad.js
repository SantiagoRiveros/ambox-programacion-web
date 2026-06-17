class Videojuego {
    constructor(titulo, genero, precio) {
        this.titulo = titulo
        this.genero = genero
        this.precio = precio
    }
    mostrarInfo() {
        console.log(`Titulo: ${this.titulo}\nGenero: ${this.genero}\nPrecio: $${this.precio}`)
    }
}

let juegos = []

let juego1 = new Videojuego("Elden Ring", "Fantasia", 80000)
let juego2 = new Videojuego("Mario Bros", "Plataformas", 15000)
let juego3 = new Videojuego("Need For Speed", "Carreras", 30000)
let juego4 = new Videojuego("Age of Empires", "Estrategia", 60000)
let juego5 = new Videojuego("GTA", "Mundo Abierto", 50000)

juegos.push(juego1, juego2, juego3, juego4, juego5)


for (let i = 0; i < juegos.length; i++) {
    juegos[i].mostrarInfo()
    if (i < juegos.length - 1) console.log("----------------")
}
