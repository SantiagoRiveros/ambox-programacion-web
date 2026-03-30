let edad = 17
let nombre = "Santiago" // es indistinto si el string lo declaro con comillas simples o dobles

if (edad > 18 || nombre == "Santiago") {
    console.log(1)
} else {
    console.log(2)
}

if (edad < 18 && nombre == "Santiago") {
    console.log("a")
} else if (edad > 18) {
    console.log("b")
} else {
    console.log("c")
}

