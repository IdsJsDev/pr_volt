import React, {
  ReactNode,
  useCallback,
  useState,
} from 'react'

import { Modal } from 'antd'
import {
  IModal,
  ModalContext,
} from '../../context/modal.context.ts'

type Props = {
  children: ReactNode
}

const ModalWrapper: React.FC<Props> = ({ children }) => {
  const [state, setState] = useState<IModal>({
    component: null,
    maskClosable: true,
  })

  const setModalState = useCallback((data: IModal) => {
    setState((prev) => ({
      ...prev,
      component: data.component,
    }))
  }, [])

  return (
    <ModalContext.Provider
      value={{ setModalComponent: setModalState }}
    >
      {children}
      {state.component && (
        <Modal
          maskClosable={state.maskClosable}
          footer={null}
          closable={false}
          open={true}
          centered={true}
          onCancel={() => setState({ component: null })}
          getContainer={() =>
            document.getElementById('root') || document.body
          }
        >
          {state.component}
        </Modal>
      )}
    </ModalContext.Provider>
  )
}

export default ModalWrapper
