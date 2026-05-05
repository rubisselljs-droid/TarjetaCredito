import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Carrucel from './pages/tareaEscuela/carrusel.jsx'
import CarrucelE from './pages/hechosPormi/CarrucelE.jsx'
import Tarjeta from './pages/tarjeta/Tarjeta.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Tarjeta />
  </StrictMode>,
)
