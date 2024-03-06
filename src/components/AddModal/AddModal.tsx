import React, { useState } from 'react'
import cls from './AddModal.module.scss'
import { Button, Input, notification } from 'antd'
import { useModalContext } from '../../context/modal.context.ts'
import { useAppDispatch } from '../../store'
import { addToDo } from '../../store/todos/todos.slice.ts'

const maxLength = 20

const AddModal: React.FC = () => {
  const [msg, setMsg] = useState('')
  const { setModalComponent } = useModalContext()
  const dispatch = useAppDispatch()

  const cancelHandler = (): void => {
    setModalComponent({ component: null })
  }

  const addHandler = (): void => {
    if (msg && msg.length <= maxLength) {
      dispatch(addToDo(msg))
      setModalComponent({ component: null })
      notification.success({
        message: 'task added',
        duration: 2,
        placement: 'bottomRight',
      })
    } else {
      notification.error({
        message: 'enter a valid message',
        duration: 2,
        placement: 'bottomRight',
      })
    }
  }
  return (
    <div className={cls.modalWrapper}>
      <p className={cls.title}>Add new task</p>
      <p className={cls.desc}>
        * maximum message length {maxLength} characters
      </p>
      <Input
        value={msg}
        placeholder={'enter message'}
        onChange={(e) => setMsg(e.target.value)}
      />
      <div className={cls.actions}>
        <Button onClick={cancelHandler}>Cancel</Button>
        <Button type={'primary'} onClick={addHandler}>
          Create
        </Button>
      </div>
    </div>
  )
}

export default AddModal
