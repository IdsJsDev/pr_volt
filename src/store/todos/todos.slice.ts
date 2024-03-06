import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {
  FilterType,
  IToDoState,
  ToDoStatus,
} from './todos.interface.ts'
import { getCurrentDateTime } from '../../utils/date.ts'

const initialState: IToDoState = {
  search: '',
  filter: FilterType.ALL,
  list: [
    {
      id: 1,
      msg: 'First task',
      status: ToDoStatus.NOT_COMPLETED,
      date: new Date(Date.now()).toISOString(),
    },
    {
      id: 2,
      msg: 'Second task',
      status: ToDoStatus.COMPLETED,
      date: new Date(Date.now()).toISOString(),
    },
    {
      id: 3,
      msg: 'Third task',
      status: ToDoStatus.NOT_COMPLETED,
      date: new Date(Date.now()).toISOString(),
    },
  ],
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setFilter: (
      state,
      action: PayloadAction<FilterType>,
    ) => {
      state.filter = action.payload
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
    addToDo: (state, action: PayloadAction<string>) => {
      state.list = [
        ...state.list,
        {
          id: new Date().getTime(),
          msg: action.payload,
          status: ToDoStatus.NOT_COMPLETED,
          date: getCurrentDateTime(),
        },
      ]
    },
    deleteToDo: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter(
        (el) => el.id !== action.payload,
      )
    },
    changeStatus: (
      state,
      action: PayloadAction<number>,
    ) => {
      const current = state.list.find(
        (el) => el.id === action.payload,
      )
      if (current) {
        state.list = [
          ...state.list.filter(
            (el) => el.id !== action.payload,
          ),
          {
            ...current,
            status:
              current.status === ToDoStatus.COMPLETED
                ? ToDoStatus.NOT_COMPLETED
                : ToDoStatus.COMPLETED,
          },
        ]
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  setFilter,
  setSearch,
  addToDo,
  deleteToDo,
  changeStatus,
} = todosSlice.actions

export default todosSlice.reducer
