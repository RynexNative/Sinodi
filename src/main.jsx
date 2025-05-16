import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { AuthProvider } from './context/authContext.jsx'
import UserProvider from './context/userContext.jsx'
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <UserProvider>
          <App />

        </UserProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
