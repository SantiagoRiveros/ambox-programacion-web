import { createSlice } from "@reduxjs/toolkit"; // Aca importamos el createSlice

const initialState = {
    value: 0 // Seteamos el valor inicial del estado
};

export const counterSlice = createSlice({ // Creamos el slice

    name: "counter", // Con nombre "counter"

    initialState, // con value : 0

    reducers: { // aca definimos lso reducers

        increment: (state) => { // Con sus acciones
            state.value += 1;
        },

        decrement: (state) => {
            state.value -= 1;
        },

        reset: (state) => {
            state.value = 0
        }

    }

});

export const {
    increment,
    decrement,
    reset
} = counterSlice.actions; // Exportamos las acciones

export default counterSlice.reducer; // Exportamos el reducer