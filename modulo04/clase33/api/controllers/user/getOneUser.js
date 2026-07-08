import fs from "fs"

export default function getOneUser(id) {
    let usuarios = JSON.parse(
        fs.readFileSync("./data/usuarios.json")
    )
    const indice = usuarios.findIndex((usuario) => usuario.id == id)
    return usuarios[indice]
}