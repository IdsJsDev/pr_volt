import React, { useEffect, useState } from 'react'
import cls from './SideBar.module.scss'
import { Button, Flex, Input, Tag } from 'antd'
import { FilterType } from '../../store/todos/todos.interface.ts'
import { useAppDispatch } from '../../store'
import {
  setFilter,
  setSearch,
} from '../../store/todos/todos.slice.ts'
import {
  useCompletedTodosCount,
  useInProgressTodosCount,
  useTodos,
} from '../../store/todos/todos.selector.ts'
import cn from 'classnames'
import { useDebounce } from '../../hooks/useDebounce.ts'
import { useModalContext } from '../../context/modal.context.ts'
import AddModal from '../AddModal/AddModal.tsx'

const SideBar: React.FC = () => {
  const [search, serSearch] = useState('')
  const debounce = useDebounce(search, 300)
  const completedCount = useCompletedTodosCount()
  const inProgressCount = useInProgressTodosCount()
  const { setModalComponent } = useModalContext()

  const dispatch = useAppDispatch()
  const { filter } = useTodos()

  useEffect(() => {
    dispatch(setSearch(debounce))
  }, [debounce])
  const filterHandler = (filter: FilterType): void => {
    dispatch(setFilter(filter))
  }

  const addHandler = (): void => {
    setModalComponent({ component: <AddModal /> })
  }
  return (
    <div className={cls.sideBarWrapper}>
      <Button
        type={'primary'}
        size={'large'}
        onClick={addHandler}
      >
        + Add Task
      </Button>
      <h2 className={cls.title}>Search:</h2>
      <Input
        placeholder={'enter search'}
        value={search}
        onChange={(val) => serSearch(val.target.value)}
        allowClear
      />
      <h2 className={cls.title}>Filter:</h2>
      <Flex gap="small" wrap="wrap">
        {Object.values(FilterType).map((el, index) => (
          <Tag
            key={index}
            className={cn(cls.tag, {
              [cls.active]: filter === el,
            })}
            onClick={() => filterHandler(el)}
          >
            {el}
          </Tag>
        ))}
      </Flex>
      <h3 className={cls.title}>
        Total completed : {completedCount}
      </h3>
      <h3 className={cls.title}>
        Total not completed : {inProgressCount}
      </h3>
    </div>
  )
}

export default SideBar
