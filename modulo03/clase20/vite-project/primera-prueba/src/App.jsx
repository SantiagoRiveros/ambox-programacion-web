import "./App.css";
import Parrafo from "./components/parrafo";
import PerfilUsuario from "./components/perfilUsuario";
import Titulo from "./components/titulo";

function App() {
  return (
    <>
      <Titulo texto="Hola Mundo" />
      <Parrafo texto="Estoy programando en React, pero ta dificil" />
      <PerfilUsuario nombre="Santiago" edad="33" trabajo="Docente" />
    </>
  );
}

export default App;
