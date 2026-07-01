import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/productos").then((data) => {
      console.log(data);
      setProducts(data.data);
    });
  }, []);

  return (
    <>
      {products.length ? (
        products.map((product) => (
          <article key={product.id}>
            <h2>{product.nombre}</h2>
            <h3>{product.precio}</h3>
            <h4>Categoria: {product.categoria}</h4>
            <h4>Stock: {product.stock}</h4>
          </article>
        ))
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
