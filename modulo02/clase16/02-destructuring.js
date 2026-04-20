let usuario = {
    nombre: "Juan",
    edad: 25,
    email: "Juan@gmail.com"
}

/* let nombre = usuario.nombre
let edad = usuario.edad
let email = usuario.email
 */
// Voy a tener que escribir esto siempre?

// QUe es destructuring? Es la forma de extraer valores facilmente

let { nombre, edad, email } = usuario;

console.log(nombre) // Juan
console.log(edad) // 25
console.log(email) // "Juan@gmail.com"

// Coincide por nombre de propiedad
// Crea variables automaticamente

// QUe pasa si yo no lo quiero guardar como "nombre"?
// Con rename:

let { nombre: nombreDeUsuario, edad: edadDeUsuario } = usuario // toma la propiedad "nombre" y la guarda con el nombre nombreDeUsuario

console.log(nombreDeUsuario) // "Juan"

// Que pasa si nose si un valor esta en el objeto? Y necesito un valor por defecto

// Si yo busco pais

let { pais = "Argentina" } = usuario; // Esto le da un valor por defecto

console.log(pais)

/* 
function mostrar(usuario) {
    console.log(usuario.nombre, usuario.edad)
}

*/
// Destructuring en una funcion
function mostrar({ nombre, edad }) {
    console.log(nombre, edad)
}

mostrar(usuario)