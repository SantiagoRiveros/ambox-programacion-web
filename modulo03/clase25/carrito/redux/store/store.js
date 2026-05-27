import { configureStore } from "@reduxjs/toolkit" // Paso 1, importar el configure store

import CartReducer from "../slices/cartSlice" // Paso 2 importar el reducer

export const store = configureStore({ // paso 3, creamos el store
    reducer: { // definimos sus reducer
        cart: CartReducer // Asignamos el reducer de cart con el valor de CartReducer
    }
})