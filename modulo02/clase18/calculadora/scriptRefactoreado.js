const pantalla = document.querySelector("#pantalla")

let operacion = null
let primerNumero = null
let segundoNumero = null
let resultado = null

function guardarEstado() {
    const estado = {
        pantalla: pantalla.textContent,
        operacion,
        primerNumero,
        segundoNumero,
        resultado
    }

    localStorage.setItem("calculadora", JSON.stringify(estado))
}

function cargarEstado() {
    const data = localStorage.getItem("calculadora")

    if (data) {
        const estado = JSON.parse(data)

        pantalla.textContent = estado.pantalla
        operacion = estado.operacion
        primerNumero = estado.primerNumero
        segundoNumero = estado.segundoNumero
        resultado = estado.resultado
    }
}

cargarEstado()

// FUNCION GENERAL PARA NUMEROS
function manejarNumero(num) {
    if (resultado != null) {
        pantalla.textContent = num
        primerNumero = num
        segundoNumero = null
        operacion = null
        resultado = null
    } else if (operacion != null) {
        pantalla.textContent += num
        segundoNumero = segundoNumero ? segundoNumero + num : num
    } else if (pantalla.textContent == "0") {
        pantalla.textContent = num
        primerNumero = num
    } else {
        pantalla.textContent += num
        primerNumero += num
    }
    guardarEstado()
}

// ASIGNAR EVENTOS A TODOS LOS NUMEROS
for (let i = 0; i <= 9; i++) {
    document
        .querySelector(`#boton-${i}`)
        .addEventListener("click", () => manejarNumero(String(i)))
}

// BOTON C
document.querySelector("#boton-C").addEventListener("click", () => {
    pantalla.textContent = "0"
    primerNumero = null
    segundoNumero = null
    operacion = null
    resultado = null

    guardarEstado()
})

// FUNCION PARA OPERACIONES
function manejarOperacion(op) {
    if (primerNumero != null && primerNumero != "0") {
        operacion = op
        pantalla.textContent = `${primerNumero} ${operacion} ${segundoNumero || ""}`
    }
    guardarEstado()
}

document.querySelector("#boton-mas").addEventListener("click", () => manejarOperacion("+"))
document.querySelector("#boton-menos").addEventListener("click", () => manejarOperacion("-"))
document.querySelector("#boton-multiplicar").addEventListener("click", () => manejarOperacion("*"))
document.querySelector("#boton-dividir").addEventListener("click", () => manejarOperacion("/"))

// IGUAL
document.querySelector("#boton-igual").addEventListener("click", () => {
    if (primerNumero && operacion && segundoNumero) {
        switch (operacion) {
            case "+":
                resultado = +primerNumero + +segundoNumero
                break
            case "-":
                resultado = +primerNumero - +segundoNumero
                break
            case "*":
                resultado = +primerNumero * +segundoNumero
                break
            case "/":
                resultado = +primerNumero / +segundoNumero
                if (isNaN(resultado)) resultado = "ERROR"
                break
        }
        pantalla.textContent = resultado
    }
    guardarEstado()
})

window.addEventListener("beforeunload", guardarEstado)