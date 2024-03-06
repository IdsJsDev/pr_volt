import React from 'react'
import useTodoList from '../../hooks/useTodoList.ts'
import cls from './ToDoList.module.scss'
import TodoCard from '../TodoCard/TodoCard.tsx'

const ToDoList: React.FC = () => {
  const { filteredTodos } = useTodoList()

  return (
    <div className={cls.listWrapper}>
      {filteredTodos.map((el) => (
        <TodoCard key={el.id} todo={el} />
      ))}
    </div>
  )
}

export default ToDoList
