let form = document.querySelector("#form")

form.addEventListener("submit", () => {
    // Si hubiera una API, nosotros aca lo que hariamos es conectarnos con ella

    // El evento en si, es como un objeto de JS
    // Dentro de ese objeto, viene un metodo, que nos sirve para
    // Evitar el comportamiento por defecto del evento
    alert("Submit")
})


