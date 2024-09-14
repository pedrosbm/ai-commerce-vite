import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from './contextProvider/ThemeProvider.tsx'

import "./index.css"
import 'normalize.css'
import './Config.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme='light'>
    <App />
    </ThemeProvider>
  </StrictMode>,
)
