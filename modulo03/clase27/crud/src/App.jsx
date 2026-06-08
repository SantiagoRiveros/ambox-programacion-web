import { useState } from "react";
import "./App.css";

function App() {
  const [productos, setProductos] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({
    nombre: "",
    precio: 0,
  });
  const [editId, setEditId] = useState();

  const handleChange = (event) => {
    setCurrentProduct({
      ...currentProduct,
      [event.target.id]: event.target.value,
    });
  };

  const handleCreate = (event) => {
    event.preventDefault();

    if (editId) {
      let editIndex = productos.findIndex((element) => element.id == editId); // busco el indice del producto a editar
      let nuevosProductos = [...productos]; // hago un shallow copy o copia del estado (No puedo hacerlo sin eso)
      nuevosProductos[editIndex] = {
        id: editId,
        nombre: currentProduct.nombre,
        precio: currentProduct.precio,
      }; // reformo
      setProductos(nuevosProductos);
      setEditId();
    } else {
      setProductos([
        ...productos,
        {
          id: productos.length + 1,
          nombre: currentProduct.nombre,
          precio: currentProduct.precio,
        },
      ]);
    }
    setCurrentProduct({
      nombre: "",
      precio: 0,
    });
  };

  const handleDelete = (id) => {
    const nuevosProductos = productos.filter((producto) => producto.id !== id);
    setProductos(nuevosProductos);
  };

  const handleUpdate = (producto) => {
    setCurrentProduct({
      nombre: producto.nombre,
      precio: producto.precio,
    });
    setEditId(producto.id);
  };

  return (
    <>
      <h2>Crear Producto</h2>
      <form onSubmit={handleCreate}>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          onChange={handleChange}
          value={currentProduct.nombre}
        />
        <label htmlFor="precio">Precio</label>
        <input
          type="number"
          id="precio"
          onChange={handleChange}
          value={currentProduct.precio}
        />
        <button type="submit">{!editId ? "Agregar" : "Editar"}</button>
      </form>
      {productos.length ? (
        productos.map((producto) => (
          <article>
            <h3>{producto.nombre}</h3>
            <h4>${producto.precio}</h4>
            <button onClick={() => handleUpdate(producto)}>Editar</button>
            <button onClick={() => handleDelete(producto.id)}>Eliminar</button>
          </article>
        ))
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
