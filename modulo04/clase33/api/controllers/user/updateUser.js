import fs from "fs"

export default function updateUser(id) {
    let usuarios = JSON.parse(
        fs.readFileSync("../data/usuarios.json", "utf-8")
    )
    const indice = usuarios.findIndex((usuario) => usuario.id == id)
    usuarios[indice] = req.body
    fs.writeFileSync(
        "./data/usuarios.json",
        JSON.stringify(usuarios, null, 2)
    )
}