const express = require("express") // esto importa express
const cors = require("cors")

// Creamos la aplicacion
const app = express()
// Ya tenemos nuestra api?
// Todavia no, es solo la aplicacion express

// uSAMOS CORS, para poder consumir la api desde cualquier puerto

// Vamos a indicarle desde que IP o puerto puede consumirse
app.use(cors())

// Como hacemos que escuche a un puerto?
app.listen(3000) // Esta indicando que la api se correra en el puerto 3000
// ACa ya express escucha al puerto 3000

// Vamos a empezar a crear nuestras propias direcciones
// ESTO SE DENOMINA -> ENDPOINTS

// La sintaxis de esto, es app.<VERBO_HTTP>(<URL_RELATIVA>, (req, res) => { <ACCION> })
app.get("/", (req, res) => { // Cuando nosotros entremos a localhost:3000 nos va a devolver "Hola mundo"
    res.send(`
        <h1>Bienvenidos</h1>

        <p>Servidor Express</p>
    `) // Imaginemos (Que lo vamos a hacer mas adelante) que en vez de un string, enviemos algo de la base de datos
})

app.get("/productos", (req, res) => {
    res.send(require("./data/productos.json"))
})