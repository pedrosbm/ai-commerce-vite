import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from './contextProvider/ThemeProvider.tsx'

import "./index.css"
import 'normalize.css'
import './Config.scss'
import { CartProvider } from './contextProvider/CartProvider.tsx'
import { AuthProvider } from './contextProvider/AuthenticationProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <ThemeProvider defaultTheme='light'>
          <App />
        </ThemeProvider>
      </CartProvider>
    </AuthProvider>
  </StrictMode>,
)
