import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Sections } from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Sections />
  </StrictMode>,
)
