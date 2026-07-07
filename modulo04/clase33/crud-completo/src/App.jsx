import { useState, useEffect } from "react";

import axios from "axios";
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
      const respuesta = await axios.get("http://localhost:3000/usuarios");
      setUsuarios(respuesta.data);
    } catch (err) {
      setError(err);
      alert(err);
    }
  }
  async function agregarUsuario(nombre, email) {
    try {
      if (editandoId) {
        // Si hay un id de que se esta editando, que haga un put
        await axios.put(`http://localhost:3000/usuarios/${editandoId}`, {
          id: editandoId,
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
        setEditandoId(null);
      } else {
        const nuevo = {
          id: usuarios.length + 1,
          name: nombre,
          email: email,
        };

        await axios.post("http://localhost:3000/usuarios", nuevo);

        setUsuarios([...usuarios, nuevo]);
      }

      setNuevoUsuario({
        name: "",
        email: "",
      });
    } catch (err) {
      setError(err);
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
            key={usuario.id}
            user={usuario}
            eliminarUsuario={eliminarUsuario}
            setEditandoId={setEditandoId}
            setNuevoUsuario={setNuevoUsuario}
          />
        ))
      ) : error ? (
        <h1>{error.message}</h1>
      ) : (
        <h3>No hay usuarios</h3>
      )}
    </>
  );
}

export default App;
