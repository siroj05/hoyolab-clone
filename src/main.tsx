import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { LoadingBarContainer } from 'react-top-loading-bar'
import { Provider } from 'react-redux'
import store from './store/store.ts'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
      <LoadingBarContainer>
        <Provider store={store}>
          <App/>
        </Provider>
      </LoadingBarContainer>
    </BrowserRouter>,
)
