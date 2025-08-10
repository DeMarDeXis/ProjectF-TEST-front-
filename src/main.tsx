import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// TODO: correctamente terminar el session si el usuario no esta logueado y no tenga token (10.08.2025)
// TODO: hacer un logout (10.08.2025)
// TODO: hacer correctamente el deploy (10.08.2025)
// TODO: src/hooks/useWebSocket.tsx (11.08.2025)
