import React from 'react'
import Header from '../../components/Header/Header.tsx'
import cls from './ToDoPage.module.scss'
import SideBar from '../../components/SideBar/SideBar.tsx'
import ToDoList from '../../components/ToDoList/ToDoList.tsx'

const ToDoPage: React.FC = () => {
  return (
    <div className={cls.pageWrapper}>
      <Header />
      <div className={cls.body}>
        <SideBar />
        <ToDoList />
      </div>
    </div>
  )
}

export default ToDoPage
