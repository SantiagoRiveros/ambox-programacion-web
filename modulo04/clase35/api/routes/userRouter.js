import { Router } from "express"
import { createUser, deleteUser, getAllUsers, getOneUser, updateUser } from "../controllers/user/index.js"

const user = Router()

user.get("/", async (req, res) => {
    const users = await getAllUsers()
    res.send(users)
})

// Traer un solo usuario
user.get("/:id", async (req, res) => {
    const user = await getOneUser(req.params.id)
    res.send(user)
})

// editar un usuario
user.put("/:id", async (req, res) => {
    const user = await updateUser(req.params.id, req.body)

})

// Crear los usuarios
user.post("/", async (req, res) => {
    const newUser = await createUser(req.body)
    res.send(newUser).status(200)
})

// Delete usuario
user.delete("/:id", async (req, res) => {
    const deletedUser = await deleteUser(req.params.id)
    res.send(deletedUser).status(200)
})


export default user