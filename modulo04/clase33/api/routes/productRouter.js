import { Router } from "express"
import fs from "fs"

const product = Router()

// GET ALL
product.get("/", (req, res) => {
    const productos = fs.readFileSync("./data/productos.json")
    res.send(productos)
})

// ARMAR UN GET ONE QUE RECIBA POR PARAMS EL ID
product.get("/:id", (req, res) => {
    const id = req.params.id
    let productos = JSON.parse(
        fs.readFileSync("./data/productos.json", "utf-8")
    )
    const indice = productos.findIndex((producto) => producto.id == id)
    // QUe el id que encuentra es 3, busca entre los productos cual tiene id 3, y devuelve el indice
    // Entonces con el indice, yo envio al frontend productos[4] (O indice)
    res.send(productos[indice])
})

// Editar un producto
product.put("/:id", (req, res) => {
    const id = req.params.id;
    let productos = JSON.parse(
        fs.readFileSync("./data/productos.json", "utf-8")
    )
    const indice = productos.findIndex((producto) => producto.id == id)
    productos[indice] = req.body
    fs.writeFileSync(
        "../data/productos.json",
        JSON.stringify(productos, null, 2)
    )
    res.sendStatus(200)
})

// CREAR UN PRODUCTO
product.post("/", (req, res) => {
    const nuevoProducto = req.body
    let productos = JSON.parse(
        fs.readFileSync("./data/productos.json", "utf-8")
    )
    productos.push(nuevoProducto)
    fs.writeFileSync("./data/productos.json", JSON.stringify(productos, null, 2))
    res.sendStatus(200)
})

// CREAR UN DELETE
product.delete("/:id", (req, res) => {
    const id = req.params.id
    let productos = JSON.parse(
        fs.readFileSync("./data/productos.json", "utf-8")
    )
    productos = productos.filter((producto) => producto.id != id)
    fs.writeFileSync("./data/productos.json", JSON.stringify(productos, null, 2))
    res.sendStatus(200)
})

export default product