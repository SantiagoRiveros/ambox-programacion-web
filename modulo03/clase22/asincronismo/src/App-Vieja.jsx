import { useEffect } from "react";

import "./App.css";

function App() {
  async function traerDatos() {
    let respuesta = await fetch("https://jsonplaceholder.typicode.com/users");

    let data = await respuesta.json();
    console.log(data);
  }

  useEffect(() => {
    traerDatos();
    console.log("El componente se renderizo (mount)");
  }, []);

  return (
    <>
      <h1>Hola mundo</h1>
    </>
  );
}

export default App;
