import { useState } from "react";

import "./App.css";

function App() {
  const [nombre, setNombre] = useState("");

  return (
    <div>
      <input
        type="text"
        value={nombre}
        onChange={(event) => setNombre(event.target.value)}
      />
      {nombre.length > 10 ? (
        <h2>Demasiados caracteres</h2>
      ) : (
        <>
          <h2>{nombre}</h2>
          <h2>Texto en mayuscula: {nombre.toUpperCase()}</h2>
          <h2>Cantidad de caracteres: {nombre.length}</h2>
        </>
      )}
    </div>
  );
}

export default App;
