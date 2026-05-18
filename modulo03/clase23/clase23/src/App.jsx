import { useState } from "react";

import "./App.css";

function App() {
  const [user, setUser] = useState({
    nombre: "",
    email: "",
    edad: "",
  });

  const [error, setError] = useState({
    nombre: "",
    email: "",
    edad: "",
  });

  function validarFormulario() {
    const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]*$/;
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // Regex -> Regular Expression
    // ES una secuencia de caracteres, que sirve para evaluar que los textos sigan cierto "patron"
    // Nos sirve para evitar submitear caracteres invalidos, prohibidos, o simplemente para evaluar el "formato" de un string
    // DATO IMPORTANTE -> En regex esta todo practicamente inventado, por ende cuando uno necesita un regex, lo googlea

    setError({
      nombre:
        user.nombre.length == 0
          ? "Este input debe contener algo"
          : !regexNombre.test(user.nombre)
            ? "El nombre solo puede contener letras y espacios"
            : "",
      email:
        user.email.length == 0
          ? "Este input debe contener algo"
          : !regexEmail.test(user.email)
            ? "El email debe tener un formato valido"
            : "",
      edad: user.edad.length == 0 ? "Este input debe contener algo" : "",
    });
  }

  function manejarSubmit(event) {
    validarFormulario();
    event.preventDefault();
  }

  function handleChange(event) {
    setUser({
      ...user,
      [event.target.name]: event.target.value, // event.target es la etiqueta que lanzo el evento
    });

    /* 
    1. Cuando yo realizo un cambio en un input se lanza la funcion handleChange
    2. esta funcion, recibe el evento
    3. se actualiza el estado, con todo el valor actual de user, y sobreescribe 
    la clave-valor usando como referencia para saber a cual corresponde ese valor, el name de la etiqueta
    */
    /* 
      Tomemos de ejemplo que escribo "Hola" en la etiqueta de nombre

      esa etiqueta name = "nombre" y value = user.nombre (Osea lo que tiene escrito adentro)
      name = "nombre"
      value = "Hola"
      setUser({
      ...user, <- Esto es el estado completo
      nombre: "Hola", 
    });
    */

    // Solo revalidamos si el campo ya tiene un error
    if (error[event.target.name].length !== 0) {
      validarFormulario();
    }
  }

  return (
    <form onSubmit={manejarSubmit}>
      <label>Nombre</label>
      <input
        type="text"
        name="nombre"
        value={user.nombre}
        onChange={handleChange}
      />
      {error.nombre.length != 0 ? <label>{error.nombre}</label> : <></>}
      <label>Email</label>
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
      />
      {error.email.length != 0 ? <label>{error.email}</label> : <></>}
      <label>Edad</label>
      <input
        type="number"
        name="edad"
        min={0}
        max={100}
        value={user.edad}
        onChange={handleChange}
      />
      {error.edad.length != 0 ? <label>{error.edad}</label> : <></>}
      <button>Enviar</button>
    </form>
  );
}

export default App;
