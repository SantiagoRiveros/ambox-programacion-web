import { useState } from "react";

export default function UserForm({ onCreate }) {
  const [nuevoUsuario, setNuevoUsuario] = useState({ name: "", email: "" });

  function onSubmit(event) {
    event.preventDefault();
    onCreate(nuevoUsuario.name, nuevoUsuario.email);
    setNuevoUsuario({ name: "", email: "" });
  }

  function handleChange(event) {
    setNuevoUsuario({
      ...nuevoUsuario,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name">Nombre</label>
      <input
        type="text"
        value={nuevoUsuario.name}
        id="name"
        name="name"
        onChange={() => handleChange}
      />
      <label htmlFor="name">Email</label>
      <input
        type="email"
        value={nuevoUsuario.email}
        id="email"
        name="email"
        onChange={() => handleChange}
      />
      <button type="submit">Crear</button>
    </form>
  );
}
