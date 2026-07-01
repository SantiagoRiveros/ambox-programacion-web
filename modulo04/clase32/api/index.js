const express = require("express") // esto importa express
const cors = require("cors")

// Vamos a usar fs para escribir archivos
const fs = require("fs")

// Creamos la aplicacion
const app = express()
// Ya tenemos nuestra api?
// Todavia no, es solo la aplicacion express

// uSAMOS CORS, para poder consumir la api desde cualquier puerto

// Vamos a indicarle desde que IP o puerto puede consumirse
app.use(cors()) //

// Esta linea permite que enviemos un "Body" al endpoint
app.use(express.json())

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

app.get("/usuarios", (req, res) => {
    res.send(require("./data/usuarios.json"))
})

app.post("/usuarios", (req, res) => {
    const nuevoUsuario = req.body // Esto, espera que se le envie un objeto cuando se hace la peticion

    // leemos el archivo de usuarios
    const usuarios = JSON.parse(
        fs.readFileSync("./data/usuarios.json", "utf-8")
    )
    // readFileSync de fs nos lee un archivo, utf-8 es el codec, por ahora mantenerlo asi.
    usuarios.push(nuevoUsuario) // aca metemos en el array de usuarios el nuevoUsuario que recibimos en el endpoint como objeto
    console.log("ACA")
    fs.writeFileSync(
        "./data/usuarios.json",
        JSON.stringify(usuarios, null, 2)
    ) // Aca sobreescribimos el archivo, primer argumento es donde esta el archivo a guardar, segundo es que vamos a guardar.
    console.log("ACA2")
    res.sendStatus(200) // Devolvemos status code 200 a la peticion
})

app.put("/usuarios/:id", (req, res) => {
    const id = req.params.id;

    let usuarios = JSON.parse(
        fs.readFileSync("./data/usuarios.json", "utf-8")
    )

    const indice = usuarios.findIndex((usuario) => usuario.id == id)
    usuarios[indice] = req.body

    fs.writeFileSync(
        "./data/usuarios.json",
        JSON.stringify(usuarios, null, 2)
    )

    res.sendStatus(200)
})