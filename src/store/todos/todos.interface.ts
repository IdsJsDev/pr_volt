export enum ToDoStatus {
  COMPLETED = 'Completed',
  NOT_COMPLETED = 'Not completed',
}

export enum FilterType {
  ALL = 'all',
  COMPLETED = 'completed',
  NOT_COMPLETED = 'not completed',
}
export interface IToDoItem {
  id: number
  msg: string
  status: ToDoStatus
  date: string
}

export interface IToDoState {
  list: IToDoItem[]
  search: string
  filter: FilterType
}
