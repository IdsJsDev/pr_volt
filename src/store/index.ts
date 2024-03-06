import {
  configureStore,
  Dispatch,
  UnknownAction,
} from '@reduxjs/toolkit'
import todosReducer from './todos/todos.slice.ts'
import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = (): Dispatch<UnknownAction> =>
  useDispatch<AppDispatch>()
