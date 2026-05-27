import { useSelector, useDispatch } from "react-redux";

import "./App.css";

import { increment, decrement, reset } from "./features/counter/counterSlice";

function App() {
  const dispatch = useDispatch(); // Envia la accion
  // Digamos que lanza info al store
  const contador = useSelector((state) => state.counter.value); // Accede al store, al counter
  // Selector -> Nos trae info del store

  return (
    <>
      <div>
        <h1>{contador}</h1>

        <button onClick={() => dispatch(increment())}>+</button>

        <button onClick={() => dispatch(decrement())}>-</button>

        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </>
  );
}

/* 
¿Que pasa cuando se dispatchea?

Redux:
busca reducer correspondiente
ejecuta logica
actualiza store
React renderiza de nuevo
*/

export default App;
