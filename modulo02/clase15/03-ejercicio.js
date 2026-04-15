let persona = {
    nombre: "Santiago",
    apellido: "Riveros",
    edad: 33,
    ciudad: "Berazategui",
    mostrarEdad: function () { return "Tiene " + this.edad + " Años" },
    mostrarCiudad: function () { return this.nombre + " vive en " + this.ciudad }
}

console.log(persona.mostrarCiudad())
console.log(persona.mostrarEdad())

/* 
voy a hacer varias "persona"
personaa va a tener estas propiedades
*/