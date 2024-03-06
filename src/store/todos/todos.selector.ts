import { RootState } from '../index.ts'
import { useSelector } from 'react-redux'
import {
  IToDoState,
  ToDoStatus,
} from './todos.interface.ts'

export const useTodos = (): IToDoState =>
  useSelector((state: RootState) => state.todos)

export const useCompletedTodosCount = (): number =>
  useSelector(
    (state: RootState) => state.todos.list,
  ).filter((el) => el.status === ToDoStatus.COMPLETED)
    ?.length

export const useInProgressTodosCount = (): number =>
  useSelector(
    (state: RootState) => state.todos.list,
  ).filter((el) => el.status === ToDoStatus.NOT_COMPLETED)
    ?.length
