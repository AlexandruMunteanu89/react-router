import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Supports weights 100-900
import '@fontsource-variable/raleway/wght.css';
import './index.css'
import * as bootstrap from 'bootstrap'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
