let pantalla = document.querySelector("#pantalla")

let boton1 = document.querySelector("#boton-1")
let boton2 = document.querySelector("#boton-2")
let boton3 = document.querySelector("#boton-3")
let boton4 = document.querySelector("#boton-4")
let boton5 = document.querySelector("#boton-5")
let boton6 = document.querySelector("#boton-6")
let boton7 = document.querySelector("#boton-7")
let boton8 = document.querySelector("#boton-8")
let boton9 = document.querySelector("#boton-9")
let botonC = document.querySelector("#boton-C")
let boton0 = document.querySelector("#boton-0")
let botonIgual = document.querySelector("#boton-igual")

let botonMas = document.querySelector("#boton-mas")
let botonMenos = document.querySelector("#boton-menos")
let botonMultiplicar = document.querySelector("#boton-multiplicar")
let botonDividir = document.querySelector("#boton-dividir")

let operacion = null

let primerNumero = null
let segundoNumero = null

let resultado = null
// Botones numericos

boton1.addEventListener("click", function () {
    if (resultado != null) {
        pantalla.textContent = "1"
        primerNumero = "1"
        segundoNumero = null
        operacion = null
        resultado = null
    } else if (operacion != null) {
        pantalla.textContent += "1"
        if (segundoNumero != null && segundoNumero != 0) {
            segundoNumero += "1"
        } else {
            segundoNumero = "1"
        }
    } else if (pantalla.textContent == 0) {
        pantalla.textContent = "1"
        primerNumero = "1"
    } else {
        pantalla.textContent += "1"
        primerNumero += "1"
    }
})

boton2.addEventListener("click", function () {
    if (resultado != null) {
        pantalla.textContent = "2"
        primerNumero = "2"
        segundoNumero = null
        operacion = null
        resultado = null
    } else if (operacion != null) {
        pantalla.textContent += "2"
        if (segundoNumero != null && segundoNumero != 0) {
            segundoNumero += "2"
        } else {
            segundoNumero = "2"
        }
    } else if (pantalla.textContent == 0) {
        pantalla.textContent = "2"
        primerNumero = "2"
    } else {
        pantalla.textContent += "2"
        primerNumero += "2"
    }
})

boton3.addEventListener("click", function () {
    if (resultado != null) {
        pantalla.textContent = "3"
        primerNumero = "3"
        segundoNumero = null
        operacion = null
        resultado = null
    } else if (operacion != null) {
        pantalla.textContent += "3"
        if (segundoNumero != null && segundoNumero != 0) {
            segundoNumero += "3"
        } else {
            segundoNumero = "3"
        }
    } else if (pantalla.textContent == 0) {
        pantalla.textContent = "3"
        primerNumero = "3"
    } else {
        pantalla.textContent += "3"
        primerNumero += "3"
    }
})

boton4.addEventListener("click", function () {
    if (resultado != null) {
        pantalla.textContent = "4"
        primerNumero = "4"
        segundoNumero = null
        operacion = null
        resultado = null
    } else if (operacion != null) {
        pantalla.textContent += "4"
        if (segundoNumero != null && segundoNumero != 0) {
            segundoNumero += "4"
        } else {
            segundoNumero = "4"
        }
    } else if (pantalla.textContent == 0) {
        pantalla.textContent = "4"
        primerNumero = "4"
    } else {
        pantalla.textContent += "4"
        primerNumero += "4"
    }
})

boton5.addEventListener("click", function () {
    if (resultado != null) {
        pantalla.textContent = "5"
        primerNumero = "5"
        segundoNumero = null
        operacion = null
        resultado = null
    } else if (operacion != null) {
        pantalla.textContent += "5"
        if (segundoNumero != null && segundoNumero != 0) {
            segundoNumero += "5"
        } else {
            segundoNumero = "5"
        }
    } else if (pantalla.textContent == 0) {
        pantalla.textContent = "5"
        primerNumero = "5"
    } else {
        pantalla.textContent += "5"
        primerNumero += "5"
    }
})

boton6.addEventListener("click", function () {
    if (resultado != null) {
        pantalla.textContent = "6"
        primerNumero = "6"
        segundoNumero = null
        operacion = null
        resultado = null
    } else if (operacion != null) {
        pantalla.textContent += "6"
        if (segundoNumero != null && segundoNumero != 0) {
            segundoNumero += "6"
        } else {
            segundoNumero = "6"
        }
    } else if (pantalla.textContent == 0) {
        pantalla.textContent = "6"
        primerNumero = "6"
    } else {
        pantalla.textContent += "6"
        primerNumero += "6"
    }
})

boton7.addEventListener("click", function () {
    if (resultado != null) {
        pantalla.textContent = "7"
        primerNumero = "7"
        segundoNumero = null
        operacion = null
        resultado = null
    } else if (operacion != null) {
        pantalla.textContent += "7"
        if (segundoNumero != null && segundoNumero != 0) {
            segundoNumero += "7"
        } else {
            segundoNumero = "7"
        }
    } else if (pantalla.textContent == 0) {
        pantalla.textContent = "7"
        primerNumero = "7"
    } else {
        pantalla.textContent += "7"
        primerNumero += "7"
    }
})

boton8.addEventListener("click", function () {
    if (resultado != null) {
        pantalla.textContent = "8"
        primerNumero = "8"
        segundoNumero = null
        operacion = null
        resultado = null
    } else
        if (operacion != null) {
            pantalla.textContent += "8"
            if (segundoNumero != null && segundoNumero != 0) {
                segundoNumero += "8"
            } else {
                segundoNumero = "8"
            }
        } else if (pantalla.textContent == 0) {
            pantalla.textContent = "8"
            primerNumero = "8"
        } else {
            pantalla.textContent += "8"
            primerNumero += "8"
        }
})

boton9.addEventListener("click", function () {
    if (resultado != null) {
        pantalla.textContent = "9"
        primerNumero = "9"
        segundoNumero = null
        operacion = null
        resultado = null
    } else
        if (operacion != null) {
            pantalla.textContent += "9"
            if (segundoNumero != null && segundoNumero != 0) {
                segundoNumero += "9"
            } else {
                segundoNumero = "9"
            }
        } else if (pantalla.textContent == 0) {
            pantalla.textContent = "9"
            primerNumero = "9"
        } else {
            pantalla.textContent += "9"
            primerNumero += "9"
        }
})

boton0.addEventListener("click", function () {
    if (pantalla.textContent != 0) {
        if (operacion != null && segundoNumero != "0") {
            segundoNumero += "0"
            pantalla.textContent += "0"
        } else {
            primerNumero += "0"
            pantalla.textContent += "0"
        }
    }

})

// Botones de operaciones

botonC.addEventListener("click", function () {
    pantalla.textContent = "0"
    primerNumero = 0
    segundoNumero = null
    operacion = null
})

botonMas.addEventListener("click", function () {
    if (primerNumero != null && primerNumero != 0) {
        operacion = "+"
        if (segundoNumero != null) {
            pantalla.textContent = primerNumero + " " + operacion + " " + segundoNumero
        } else {
            pantalla.textContent = primerNumero + " " + operacion + " "
        }
    }
})

botonMenos.addEventListener("click", function () {
    if (primerNumero != null && primerNumero != 0) {
        operacion = "-"
        if (segundoNumero != null) {
            pantalla.textContent = primerNumero + " " + operacion + " " + segundoNumero
        } else {
            pantalla.textContent = primerNumero + " " + operacion + " "
        }

    }
})

botonMultiplicar.addEventListener("click", function () {
    if (primerNumero != null && primerNumero != 0) {
        operacion = "*"
        if (segundoNumero != null) {
            pantalla.textContent = primerNumero + " " + operacion + " " + segundoNumero
        } else {
            pantalla.textContent = primerNumero + " " + operacion + " "
        }

    }
})

botonDividir.addEventListener("click", function () {
    if (primerNumero != null && primerNumero != 0) {
        operacion = "/"
        if (segundoNumero != null) {
            pantalla.textContent = primerNumero + " " + operacion + " " + segundoNumero
        } else {
            pantalla.textContent = primerNumero + " " + operacion + " "
        }

    }
})

botonIgual.addEventListener("click", function () {
    console.log(primerNumero != 0)
    console.log(primerNumero != null)
    console.log(operacion != null)
    console.log(segundoNumero != 0)
    console.log(segundoNumero != null)
    if (primerNumero != 0 && primerNumero != null && operacion != null && segundoNumero != 0 && segundoNumero != null) {
        switch (operacion) {
            case ("+"):
                resultado = +primerNumero + +segundoNumero
                pantalla.textContent = resultado
                break;
            case ("-"):
                resultado = +primerNumero - +segundoNumero
                pantalla.textContent = resultado
                break;
            case ("*"):
                resultado = +primerNumero * +segundoNumero
                pantalla.textContent = resultado
                break;
            case ("/"):
                resultado = +primerNumero / +segundoNumero
                pantalla.textContent = resultado == NaN ? "ERROR" : resultado
                break;
            default:
                alert("Falta algo")
                break;
        }
    }
})

