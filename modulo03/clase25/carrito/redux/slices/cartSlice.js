// Paso 1 importamos el create slice
import { createSlice } from "@reduxjs/toolkit"

// PAso 2 creamos el estado inicial
const initialState = {
    productos: [] // definimos el estado inicial como un array vacioi
}

// Paso 3 creamos el slice
export const cartSlice = createSlice({
    name: "cart", // con nombre "cart"
    initialState, // le pasamos el estado inicial
    reducers: { // definimos los reducers
        agregarCarrito: (state, action) => { state.productos.push(action.payload) }, // Este, recibe action,
        //  y dentro de action payload, el cual contiene lo que se envio en el dispatch como parametro
        vaciarCarrito: (state) => { state.productos = [] } // Este "resetea el carrito"
    }
})

export const {
    agregarCarrito,
    vaciarCarrito
} = cartSlice.actions // exportamos las actions

export default cartSlice.reducer // exportamos el reducer