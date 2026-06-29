const http = require("http") // importamos el modulo http
const todos = require("./todos.json")

// Creamos el servidor
const server = http.createServer((request, response) => {
    console.log(request.url)
    if (request.url == "/") {
        console.log("Inicio")
    } else if (request.url == "/usuarios") {
        console.log("Usuarios")
    } else if (request.url == "/todos") {
        response.end(JSON.stringify(todos))
    }

})

// Ya esta funcionando? No, todavia no le indicamos que hacer

server.listen("3000") // Le indicamos que corra en el puerto 3000

// Nosotros tenemos dentro de la request, varias cosas