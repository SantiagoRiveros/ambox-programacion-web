import { User } from "../../models/index.js"

export default async function createUser(nuevoUsuario) {
    const userCreated = await User.create(nuevoUsuario)
    return userCreated
}