import { useState, useEffect } from "react";

import api from "./services/api";
import "./App.css";
import userCard from "./components/userCard";
import UserCard from "./components/userCard";

function App() {
  const [usuarios, setUsuarios] = useState([]);

  async function obtenerUsuarios() {
    const respuesta = await api.get("/users");
    console.log(respuesta);
    setUsuarios(respuesta.data);
  }

  async function agregarUsuario(nombre, email) {
    const respuesta = await api.post("/users", { name: nombre, email: email });

    setUsuarios([
      ...usuarios,
      {
        id: usuarios.length - 1,
        name: nombre,
        email: email,
      },
    ]);
  }

  async function eliminarUsuario(id) {
    await api.delete(`/users/${id}`);

    const nuevosUsuarios = usuarios.filter((usuario) => usuario.id !== id);

    setUsuarios(nuevosUsuarios);
  }

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  return (
    <>
      <h1>Usuarios</h1>
      {usuarios.length
        ? usuarios.map((usuario) => (
            <UserCard key={usuario.key} user={usuario} />
          ))
        : null}
    </>
  );
}

export default App;
