// Vamos a capturar el elemento button

let btn = document.querySelector("#btn")

// Y ademas, capturamos el body

let body = document.querySelector("body")


// Vamos a agregarle un event listener, que cuando el boton reciba un click, vuelva el fondo de la pagina rojo
let contador = 0
btn.addEventListener("click", function () {
    if (body.style.backgroundColor == "white") {
        body.style.backgroundColor = "red"
    } else {
        body.style.backgroundColor = "white"
    }
    contador += 1
    btn.textContent = "Clickeado " + contador + " veces"

})


// "click" -> evento
// function(){} -> lo que se ejecuta cuando se recibe el evento