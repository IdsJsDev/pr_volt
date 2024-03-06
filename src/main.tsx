import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './store'
import './styles/index.css'
import ModalWrapper from './components/ModalWrapper/ModalWrapper.tsx'

ReactDOM.createRoot(
  document.getElementById('root')!,
).render(
  <React.StrictMode>
    <Provider store={store}>
      <ModalWrapper>
        <App />
      </ModalWrapper>
    </Provider>
  </React.StrictMode>,
)
