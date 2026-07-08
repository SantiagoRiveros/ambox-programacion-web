import { Router } from "express"
import fs from "fs"
import { createUser, deleteUser, getOneUser, updateUser } from "../controllers/user/index.js"

const user = Router()

// GET http://localhost:3000/usuarios/3

// Para traer todos los usuarios
user.get("/", (req, res) => { // GET a http://localhost:3000/usuarios
    const usuarios = fs.readFileSync("./data/usuarios.json")
    res.send(usuarios)
})

// Traer un solo usuario
user.get("/:id", (req, res) => { // GET http://localhost:3000/usuarios/3 ejemplo
    res.send(getOneUser(req.params.id))
    // Por query, por body, o por params
    // params -> http://localhost:3000/usuarios/3
    // el 3, al vos hacer una peticion de tipo GET
    // y tener preparado un endpoint, node interpreta
    // que es un params
})

// editar un usuario
user.put("/:id", (req, res) => { // PUT http://localhost:3000/usuarios/2
    updateUser(req.params.id)
    res.sendStatus(200)
})

// Crear los usuarios
user.post("/", (req, res) => { // POST http://localhost:3000/usuarios/
    createUser(req.body)
    res.sendStatus(200)
})

// Delete usuario
user.delete("/:id", (req, res) => { // DELETE http://localhost:3000/usuarios/2
    deleteUser(req.params.id)
    res.sendStatus(200)
})


export default user