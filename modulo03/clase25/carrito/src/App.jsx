import { useSelector, useDispatch } from "react-redux"; // Importamos los hooks que vamos a usar

import { agregarCarrito, vaciarCarrito } from "../redux/slices/cartSlice"; // importamos la acciones
import "./App.css";

function App() {
  const dispatch = useDispatch(); // Definimos el dispatch, con el hook

  const productos = useSelector((state) => state.cart.productos); // Nos traemos informacion del store con el useSelector

  return (
    <>
      <h1>Productos</h1>
      <button onClick={() => dispatch(agregarCarrito("Mouse"))}>
        {/* // Mandamos un dispatch con la prop "Mouse" Agregar Mouse */}
      </button>
      <button onClick={() => dispatch(agregarCarrito("Teclado"))}>
        {/* // Mandamos un dispatch con la prop "Teclado" Agregar teclado Agregar
        teclado */}
      </button>
      <button onClick={() => dispatch(vaciarCarrito())}>Vaciar</button>
      {/* DIspatch de vaciar carrito */}
      {productos.map(
        (
          producto, // Producots es un array, y le hago un map
        ) => (
          <h2>{producto}</h2> // Para que por cada indice me devuelva un producto en un tag h2
        ),
      )}
    </>
  );
}

export default App;
