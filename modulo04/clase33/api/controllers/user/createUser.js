import fs from "fs"

export default function createUser(nuevoUsuario) {
    const usuarios = JSON.parse(
        fs.readFileSync("./data/usuarios.json", "utf-8")
    )
    usuarios.push(nuevoUsuario)
    fs.writeFileSync(
        "./data/usuarios.json",
        JSON.stringify(usuarios, null, 2)
    )
}