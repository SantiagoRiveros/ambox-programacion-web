import fs from "fs"

export default function deleteUser(id) {
    let usuarios = JSON.parse(
        fs.readFileSync("./data/usuarios.json", "utf-8")
    )
    usuarios = usuarios.filter((usuario) => usuario.id != id)
    fs.writeFileSync("./data/usuarios.json", JSON.stringify(usuario, null, 2))
}