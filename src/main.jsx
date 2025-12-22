import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//manejador de rutas
import AppRouters from './routers/AppRouters'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRouters />
  </StrictMode>,
)
