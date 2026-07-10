import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

console.log('main.jsx: Rendering app...')

const rootElement = document.getElementById('root')
if (!rootElement) {
  console.error('main.jsx: Root element not found!')
} else {
  console.log('main.jsx: Root element found, rendering...')
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

console.log('main.jsx: Render call completed')
