import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Usuarios from "./components/usuarios";
import Productos from "./components/productos";
import Contacto from "./components/contacto";
import Error404 from "./components/error404";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/contacto">Contacto</Link>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Inicio
        </button>
        <button
          onClick={() => {
            navigate("/productos");
          }}
        >
          Productos
        </button>
        <button
          onClick={() => {
            navigate("/contacto");
          }}
        >
          Contacto
        </button>
      </nav>
      <Routes>
        <Route path="/" element={<Usuarios />} />{" "}
        {/* Cuando vos estas en / renderiza Usuarios */}
        <Route path="/productos" element={<Productos />} />{" "}
        {/* cuando vos estas en /productos renderiza Productos */}
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <h2>ESTE ES UN FOOTER</h2>
    </>
  );
}

export default App;

/* 
useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") // fetch hace una peticion get a la URL que le pasamos
      .then((response) => {
        // para que usamos el .then
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);

*/
