import { useContext } from "react";
import UserContext from "../context/UserContext";

function Navbar() {
  const { usuario, setUsuario } = useContext(UserContext);

  return (
    <div>
      {!usuario && (
        <button
          onClick={() =>
            setUsuario({
              nombre: "Juan",
              email: "juan@gmail.com",
            })
          }
        >
          Login
        </button>
      )}

      {usuario && <h2>Hola {usuario.nombre}</h2>}
    </div>
  );
}

export default Navbar;
