let form = document.querySelector("#form")
// Capturar y mostrar el valor de input en el alert
let input = document.querySelector("#input")

let lista = document.querySelector("#lista")

form.addEventListener("submit", (evento) => {
    // Si hubiera una API, nosotros aca lo que hariamos es conectarnos con ella

    // El evento en si, es como un objeto de JS
    // Dentro de ese objeto, viene un metodo, que nos sirve para
    // Evitar el comportamiento por defecto del evento
    evento.preventDefault()
    // alert(input.value)
    let heading = document.createElement("li")
    heading.textContent = "El cliente pidio: " + input.value
    lista.appendChild(heading)
})


