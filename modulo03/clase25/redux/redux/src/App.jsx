import { useSelector, useDispatch } from "react-redux";

import "./App.css";

import { increment, decrement, reset } from "./features/counter/counterSlice";

function App() {
  const dispatch = useDispatch(); // Envia la accion

  const contador = useSelector((state) => state.counter.value); // Accede al store
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

export default App;
