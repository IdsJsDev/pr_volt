import {
  useCompletedTodosCount,
  useInProgressTodosCount,
  useTodos,
} from '../store/todos/todos.selector.ts'
import {
  FilterType,
  IToDoItem,
  ToDoStatus,
} from '../store/todos/todos.interface.ts'
import { useMemo } from 'react'

interface Interface {
  completedCount: number
  inProgressCount: number
  todos: IToDoItem[]
  filteredTodos: IToDoItem[]
}

const useTodoList = (): Interface => {
  const { list, search, filter } = useTodos()
  const completedCount = useCompletedTodosCount()
  const inProgressCount = useInProgressTodosCount()
  const filteredTodos = useMemo(() => {
    let filteredTodos = [...list].sort(
      (a, b) => a.id - b.id,
    )

    if (filter) {
      switch (filter) {
        case FilterType.COMPLETED: {
          filteredTodos = list.filter(
            (el) => el.status === ToDoStatus.COMPLETED,
          )
          break
        }
        case FilterType.NOT_COMPLETED: {
          filteredTodos = list.filter(
            (el) => el.status === ToDoStatus.NOT_COMPLETED,
          )
          break
        }
      }
    }
    if (search) {
      filteredTodos = filteredTodos.filter((item) =>
        item.msg
          .toLowerCase()
          .includes(search.toLowerCase()),
      )
    }
    return filteredTodos
  }, [list, search, filter])
  return {
    completedCount,
    inProgressCount,
    todos: list,
    filteredTodos,
  }
}

export default useTodoList
