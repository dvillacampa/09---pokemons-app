import { configureStore } from '@reduxjs/toolkit'

// Nuestro Reducer
import { counterSlice } from './slices/counter';
import { pokemonSlice } from './slices/pokemon'
import { todosApi } from './apis';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemon: pokemonSlice.reducer,

    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: ( getDefaultMiddleware ) => getDefaultMiddleware().concat( todosApi.middleware )
})