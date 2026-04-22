// Trabajamos con fetch

// Fetch, hace una request o peticion a una API externa
// por defecto su peticion es GET

/* 
GET -> Leer 
POST -> Crear
PUT -> Editar
DELETE -> Eliminar

*/

let div = document.createElement("div")
div.style.display = "flex"
div.style.flexDirection = "column"
div.style.gap = "15px"
document.body.appendChild(div)
fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())  // res, es la respuesta, o response, y viene en formato json, con el .json() lo pasamos a objeto
    .then((data) => {
        data.forEach((elemento) => {
            let articulo = document.createElement("article")

            articulo.style.border = "1px solid black"
            articulo.style.borderRadius = "5px"
            articulo.style.display = "flex"
            articulo.style.flexDirection = "column"
            articulo.style.padding = "10px"

            let titulo = document.createElement("h1")
            titulo.textContent = elemento.title
            let id = document.createElement("h2")
            id.textContent = "ID: " + elemento.id
            let userID = document.createElement("h2")
            userID.textContent = "User ID: " + elemento.userId
            let parrafo = document.createElement("p")
            parrafo.textContent = elemento.body
            articulo.appendChild(titulo)
            articulo.appendChild(id)
            articulo.appendChild(userID)
            articulo.appendChild(parrafo)
            div.appendChild(articulo)
        })
    })

