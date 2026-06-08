let nombre: string = "Juan"; // tipo string

let numero: number = 32;

let activo: boolean = true;

let indefinido: undefined = undefined;

let nulo: null = null;

let cualquiera: any = 32; // el tipo any es para asignarle cualquier valor, cualquier tipo

cualquiera = "Hola";
cualquiera = true;

// es mejor intentar evitar el "any"

// Inferencia de tipos

let nombreUsuario = "Juan"; // TS ya interpreta que nombreUsuario es un string

// Esto de aca arriba
// Es igual a -> let nombreUsuario : string = "Juan"

// arrays tipados
let arrayNumeros: number[] = [1, 2, 3];
// se tipifica igual que una variable normal, pero con los corchetes al final.

let arrayTexto: string[] = ["Hola", "Chau", "Milanesa"];

// error
// let arrayNuevo: number[] = [1, 2, 3, "Hola"];

// tipado en objetos
const usuario: {
  nombre: string;
  edad: number;
} = {
  nombre: "Carlos",
  edad: 39,
};

// QUeda re largo el objeto, la mejor manera de hacer esto, es con interfaces
// interfaces -> NO ES LO MISMO QUE INTERFACES DEL FRONTEND

interface Usuario {
  nombre: string;
  edad?: number; // que pasa, si edad, es una propiedad opcional? Como le indicamos que una propiedad puede o no tenerla?
}

let nuevoUsuario: Usuario = {
  nombre: "Horacio",
  edad: 53,
};

let usuario2: Usuario = {
  nombre: "Patricia",
  edad: 31,
};

// Ahora con el ? me permite hacer cosas como:
let usuarioSinEdad: Usuario = {
  nombre: "Federico",
};

// Que pasa, si yo quiero crear un array de usuarios?
let arrayUsuarios: Usuario[] = [nuevoUsuario, usuario2, usuarioSinEdad];

// Como tipar funciones?

function suma(a: number, b: number) {
  return a + b;
}

// Y como tipar el retorno de una funcion?

function suma2(a: number, b: number): number {
  // el : number al final de esta linea indica que su retorno sera number
  return a + b;
}

// Esto que voy a explicar, FUNCIONA TAMBIEN EN JS
// COmo le paso una propiedad, por defecto?

// imaginemos que yo llamo en JS asi suma2(1) <- No le pase B, por ende "rompe"
function suma3(a: number = 0, b: number = 0): number {
  return a + b;
}
// si llamamos sumar3() -> es iugual a suma3(0, 0)

// Que hago si una funcion no retorna nada?

function saludar(nombre: string = ""): void {
  // void indica que una funcion no retorna nada
  console.log("Hola", nombre);
}
