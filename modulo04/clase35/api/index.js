import express from "express"
import routes from "./routes/index.js"
import mongoose from "mongoose"

const app = express()
app.use(express.json())

// TODAS las peticiones a http:localhost:3000/ van a usar routes
// nos conectamos con MongoDB
mongoose.connect("mongodb+srv://santiagoriverosjasis_db_user:LzN9K0ZwcfwnSBKE@cluster0.o0v02th.mongodb.net/tienda?appName=Cluster0/")
    .then(() => {
        app.use("/", routes)

        app.listen(3000, () => {
            console.log("🚀 Servidor iniciado en http://localhost:3000");
        })
    }).catch((err) => {
        console.error("❌ Error al conectar con MongoDB");
        console.error(err);
    })