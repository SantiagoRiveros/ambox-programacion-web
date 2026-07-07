import { Router } from "express"
import fs from "fs"

const user = Router()

// Para traer todos los usuarios
user.get("/", (req, res) => {
    const usuarios = fs.readFileSync("./data/usuarios.json")
    res.send(usuarios)
})

// Traer un solo usuario
user.get("/:id", (req, res) => {
    const id = req.params.id
    let usuarios = JSON.parse(
        fs.readFileSync("./data/usuarios.json")
    )
    const indice = usuarios.findIndex((usuario) => usuario.id == id)
    res.send(usuarios[indice])
})

// editar un usuario
user.put("/:id", (req, res) => {
    const id = req.params.id;
    let usuarios = JSON.parse(
        fs.readFileSync("../data/usuarios.json", "utf-8")
    )
    const indice = usuarios.findIndex((usuario) => usuario.id == id)
    usuarios[indice] = req.body
    fs.writeFileSync(
        "./data/usuarios.json",
        JSON.stringify(usuarios, null, 2)
    )
    res.sendStatus(200)
})

// Crear los usuarios
user.post("/", (req, res) => {
    const nuevoUsuario = req.body
    const usuarios = JSON.parse(
        fs.readFileSync("./data/usuarios.json", "utf-8")
    )
    usuarios.push(nuevoUsuario)
    fs.writeFileSync(
        "./data/usuarios.json",
        JSON.stringify(usuarios, null, 2)
    )
    res.sendStatus(200)
})

// Delete usuario
user.delete("/:id", (req, res) => {
    const id = req.params.id
    let usuarios = JSON.parse(
        fs.readFileSync("./data/usuarios.json", "utf-8")
    )
    usuarios = usuarios.filter((usuario) => usuario.id != id)
    fs.writeFileSync("./data/usuarios.json", JSON.stringify(usuario, null, 2))
    res.sendStatus(200)
})


export default user