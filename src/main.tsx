import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { LoadingBarContainer } from 'react-top-loading-bar'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <LoadingBarContainer>
      <App/>
    </LoadingBarContainer>
  </BrowserRouter>,
)
