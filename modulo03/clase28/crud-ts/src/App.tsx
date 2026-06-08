import { useState } from "react";
import type { ChangeEvent, SubmitEvent } from "react";
import "./App.css";

interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

interface CurrentProduct {
  nombre: string;
  precio: number;
}

function App() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [currentProduct, setCurrentProduct] = useState<CurrentProduct>({
    nombre: "",
    precio: 0,
  });
  const [editId, setEditId] = useState<number | null>();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentProduct({
      ...currentProduct,
      [event.target.id]: event.target.value,
    });
  };

  const handleCreate = (event: SubmitEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (editId) {
      const editIndex: number = productos.findIndex(
        (element) => element.id == editId,
      ); // busco el indice del producto a editar
      const nuevosProductos: Producto[] = [...productos]; // hago un shallow copy o copia del estado (No puedo hacerlo sin eso)
      nuevosProductos[editIndex] = {
        id: editId,
        nombre: currentProduct.nombre,
        precio: currentProduct.precio,
      }; // reformo
      setProductos(nuevosProductos);
      setEditId(null);
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

  const handleDelete = (id: number): void => {
    const nuevosProductos: Producto[] = productos.filter(
      (producto) => producto.id !== id,
    );
    setProductos(nuevosProductos);
  };

  const handleUpdate = (producto: Producto): void => {
    setCurrentProduct({
      nombre: producto.nombre,
      precio: producto.precio,
    });
    setEditId(producto.id);
  };

  return (
    <>
      <h2>{!editId ? "Crear Producto" : "Editar Producto"}</h2>
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
