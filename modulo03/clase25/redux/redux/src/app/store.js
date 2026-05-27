import { configureStore } from "@reduxjs/toolkit"; // Crea el store, viene ya preconfigurado, solo le pasamos unas props

import counterReducer from "../features/counter/counterSlice" // Importamos el reducer del contador
// Esto decide como cambia el estado

export const store = configureStore({ // Creamos el store
    reducer: { // aca registramos todos los reducer de la app
        counter: counterReducer // counter va a ser "manejado" por counterReducer
    }
})



// Creamos el estado global de la aplicacion

// REdux necesita un lugar donde guardar TODO el estado global

// Eso es el store

// Como si fuera una base de datos global de toda la app

// Todos los componentes leen datos y modifican desde aca
// El valor counter, es importante, porque, nos va a devolver algo asi

/*
state: {
    counter:{
        value: 0
    }
}
*/

// Como accedemos a esto? -> state.counter.value