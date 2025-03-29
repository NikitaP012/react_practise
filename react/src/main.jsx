import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import Neha from './Neha.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Neha />
  </StrictMode>,
)
