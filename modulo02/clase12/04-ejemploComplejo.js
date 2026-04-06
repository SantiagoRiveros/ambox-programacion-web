const suma = (a = 0, b = 0) => a + b

const resta = (a = 0, b = 0) => a - b

const multiplicacion = (a = 0, b = 0) => a * b

const division = (a = 0, b = 1) => a / b

const calculadora = (num1, num2, operacion) => {
    if (operacion == "suma") {
        return suma(num1, num2)
    } else if (operacion == "resta") {
        return resta(num1, num2)
    } else if (operacion == "multiplicacion") {
        return multiplicacion(num1, num2)
    } else if (operacion == "division") {
        return division(num1, num2)
    } else {
        console.log("operacion no valida")
    }
}

console.log(calculadora(3, 7, "suma"))

console.log(calculadora(9, 2, "resta"))

console.log(calculadora(3, 1, "multiplicacion"))