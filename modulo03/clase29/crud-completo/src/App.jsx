import { useState, useEffect } from "react";

import api from "./services/api";
import "./App.css";
import UserCard from "./components/userCard";
import UserForm from "./components/UserForm";

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [editandoId, setEditandoId] = useState(null);
  const [nuevoUsuario, setNuevoUsuario] = useState({ name: "", email: "" });
  const [error, setError] = useState(null);

  async function obtenerUsuarios() {
    try {
      const respuesta = await api.get("/users");
      setUsuarios(respuesta.data);
    } catch (err) {
      setError(err);
      alert(err);
    }
  }

  async function agregarUsuario(nombre, email) {
    try {
      await api.post("/users", { name: nombre, email: email });

      if (editandoId) {
        await api.put(`/users/${editandoId}`, {
          name: nombre,
          email: email,
        });

        const nuevosUsuarios = usuarios.map((usuario) =>
          usuario.id === editandoId
            ? {
                ...usuario,
                name: nombre,
                email: email,
              }
            : usuario,
        );

        setUsuarios(nuevosUsuarios);
        setNuevoUsuario({ name: "", email: "" });
        setEditandoId(null);
      } else {
        setUsuarios([
          ...usuarios,
          {
            id: usuarios.length - 1,
            name: nombre,
            email: email,
          },
        ]);
        setNuevoUsuario({ name: "", email: "" });
      }
    } catch (err) {
      setError(err);
      alert(err);
    }
  }

  async function eliminarUsuario(id) {
    try {
      await api.delete(`/users/${id}`);
      const nuevosUsuarios = usuarios.filter((usuario) => usuario.id !== id);
      setUsuarios(nuevosUsuarios);
    } catch (err) {
      setError(err);
      alert(err);
    }
  }

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  return (
    <>
      <h1>Usuarios</h1>
      <UserForm
        onCreate={agregarUsuario}
        nuevoUsuario={nuevoUsuario}
        setNuevoUsuario={setNuevoUsuario}
        editandoId={editandoId}
      />
      {!error && usuarios.length ? (
        usuarios.map((usuario) => (
          <UserCard
            key={usuario.key}
            user={usuario}
            eliminarUsuario={eliminarUsuario}
            setEditandoId={setEditandoId}
            setNuevoUsuario={setNuevoUsuario}
          />
        ))
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <h3>Cargando</h3>
      )}
    </>
  );
}

export default App;
