import { useEffect, useState } from "react";
import axios from "axios";
import Heading from "./components/Heading";

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  // NUEVO ESTADO
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    async function traerUsuarios() {
      try {
        let respuesta = await axios.get(
          "https://jsonplaceholder.typicode.com/users",
        );

        setUsuarios(respuesta.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    traerUsuarios();
  }, []);

  // FILTRAR USUARIOS
  const usuariosFiltrados = usuarios.filter((usuario) =>
    usuario.name.toLowerCase().includes(busqueda.toLowerCase()),
  );

  return (
    <div>
      <Heading size="h1" text="Usuarios" />

      {/* INPUT */}
      <input
        type="text"
        placeholder="Buscar usuario..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      {loading ? (
        <Heading size="h2" text="Cargando..." />
      ) : (
        usuariosFiltrados.map((usuario) => (
          <div key={usuario.id}>
            <h3>{usuario.name}</h3>
            <p>{usuario.email}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
