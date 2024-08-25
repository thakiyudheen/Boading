import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {  ContextP } from './context/context.jsx'
import { Provider } from 'react-redux'
import store from './redux/app/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextP>
      <Provider  store={store}>
        <App />
      </Provider>
    </ContextP>
  </StrictMode>,
)
