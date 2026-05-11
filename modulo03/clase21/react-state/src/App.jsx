import { useState } from "react";

import "./App.css";

function App() {
  // el estado se declara asi:
  // const [estado, setEstado] = useState(valorInicial)
  const [count, setCount] = useState(0);
  // count += 1 <- Esto no se puede
  // setCount((count) => count + 1)
  return (
    <>
      <section id="center">
        <button onClick={() => setCount((count) => count - 1)}>-</button>
        Count is {count}
        <button onClick={() => setCount((count) => count + 1)}>+</button>
      </section>
    </>
  );
}

export default App;
