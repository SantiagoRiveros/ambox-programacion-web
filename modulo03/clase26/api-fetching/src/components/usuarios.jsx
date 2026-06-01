import { useState, useEffect } from "react";
import axios from "axios";

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function traerUsuarios() {
      try {
        const respuesta = await axios.get(
          "https://jsonplaceholder.typicode.com/users",
        );
        console.log(respuesta);
        setUsuarios(respuesta.data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setError(error.message);
      }
    }

    traerUsuarios();
  }, []);

  return (
    <>
      <h1>Hola Mundo</h1>
      {!loading ? (
        usuarios.map((usuario) => {
          return (
            <div>
              <h2>Name: {usuario.name}</h2>
              <h2>User: {usuario.username}</h2>
              <h2>Email: {usuario.email}</h2>
            </div>
          );
        })
      ) : !error ? (
        <h2>Cargando</h2>
      ) : (
        <h2>{error}</h2>
      )}
    </>
  );
}
