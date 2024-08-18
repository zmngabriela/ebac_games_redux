import { configureStore } from '@reduxjs/toolkit'
import carrinhoReduzer from './reducers/carrinho'
import api from '../services/api'

// isso e uma funcao que recebe um objeto
// que e o conjunto de reducers do projeto (rootreducer)
export const store = configureStore({
  reducer: {
    carrinho: carrinhoReduzer,
    [api.reducerPath]: api.reducer // explicado em api.ts
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

// alem do api, precisamos configurar o middlewaren com o api, que e um intermediario entre o dispatcher e store

// CONFIGURANDO TYPESCRIPT A ENTENDER O TIPO DE ESTADO/STORE:
export type RootReducer = ReturnType<typeof store.getState>
