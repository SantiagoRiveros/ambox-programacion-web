// Seleccionar y cambiar texto
let lorem = document.querySelector("#lorem")

lorem.textContent = "Hola Mundo"

let div = document.createElement("div")

let titulo = document.createElement("h1")
let texto = document.createElement("p")
let boton = document.createElement("button")

titulo.textContent = "Texto de Titulo"
texto.textContent = "Lorem ipsum"
boton.textContent = "Boton"

div.appendChild(titulo)
div.appendChild(texto)
div.appendChild(boton)

// Ahora inserto el div en el documento

div.style.padding = "20px"
div.style.textDecoration = "underline"
div.style.border = "1px solid black"
div.style.display = "flex"
div.style.flexDirection = "column"
div.style.textAlign = "center"

document.body.appendChild(div)



let lista = document.createElement("ul")

let arrayEmpleados = ["Juan", "Patricia", "Hernan", "Romulo", "Ramon"]

function crearElementosDeLista(array) {
    for (let i = 0; i < array.length; i++) {
        let itemLista = document.createElement("li")
        itemLista.textContent = array[i]
        lista.appendChild(itemLista)
    }

}

document.body.appendChild(lista)

boton.addEventListener("click", () => {
    crearElementosDeLista(arrayEmpleados)
})