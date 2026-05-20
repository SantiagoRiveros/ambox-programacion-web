import { useContext } from "react";
import UserContext from "../context/UserContext";

function Perfil() {
  const { usuario, setUsuario } = useContext(UserContext);

  return (
    <div>
      {usuario ? (
        <div>
          <h1>{usuario.nombre}</h1>
          <p>{usuario.email}</p>
          <button onClick={() => setUsuario(null)}>Logout</button>
        </div>
      ) : (
        <h1>No logueado</h1>
      )}
    </div>
  );
}

export default Perfil;
