import { createContext, ReactNode, useContext } from 'react'

const contextInitial: IModalContext = {
  setModalComponent: () => {
    return
  },
}

export interface IModal {
  component: ReactNode | null
  maskClosable?: boolean
  closable?: boolean
}

export interface IModalContext {
  setModalComponent(val: IModal): void
}

export const ModalContext =
  createContext<IModalContext>(contextInitial)
export const useModalContext = (): IModalContext =>
  useContext(ModalContext)
