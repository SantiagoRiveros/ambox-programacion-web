const http = require("http") // importamos el modulo http
const productos = require("./jsons/productos.json")
const categorias = require("./jsons/categorias.json")
const usuarios = require("./jsons/usuarios.json")
const ofertas = require("./jsons/ofertas.json")
const carrito = require("./jsons/carrito.json")

// Creamos el servidor
const server = http.createServer((request, response) => {
    if (request.url == "/") {
        response.end("Inicio")
    } else if (request.url == "/productos") {
        response.end(JSON.stringify(productos))
    } else if (request.url == "/categorias") {
        response.end(JSON.stringify(categorias))
    } else if (request.url == "/usuarios") {
        response.end(JSON.stringify(usuarios))
    } else if (request.url == "/ofertas") {
        response.end(JSON.stringify(ofertas))
    } else if (request.url == "/carrito") {
        response.end(JSON.stringify(carrito))
    }
})

// Ya esta funcionando? No, todavia no le indicamos que hacer

server.listen("3000") // Le indicamos que corra en el puerto 3000

// Nosotros tenemos dentro de la request, varias cosas