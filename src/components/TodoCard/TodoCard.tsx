import React from 'react'
import { IToDoItem } from '../../store/todos/todos.interface.ts'
import cls from './TodoCard.module.scss'
import { useAppDispatch } from '../../store'
import {
  changeStatus,
  deleteToDo,
} from '../../store/todos/todos.slice.ts'

interface Props {
  todo: IToDoItem
}

const TodoCard: React.FC<Props> = ({ todo }) => {
  const dispatch = useAppDispatch()

  const deleteHandler = (): void => {
    dispatch(deleteToDo(todo.id))
  }

  const changeHandler = (): void => {
    dispatch(changeStatus(todo.id))
  }
  return (
    <div className={cls.cardWrapper}>
      <div className={cls.info}>
        <p className={cls.msg} onClick={changeHandler}>
          {todo.msg}
        </p>
        <p className={cls.status}>status : {todo.status}</p>
      </div>
      <div className={cls.actions}>
        <p className={cls.close} onClick={deleteHandler}>
          X
        </p>
      </div>
    </div>
  )
}

export default TodoCard
