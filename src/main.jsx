import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { AuthProvider } from './context/authContext.jsx'
import UserProvider from './context/userContext.jsx'
// import { BrowserRouter } from "react-router-dom";
import { HashRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="215603538898-tucljistpuqifiv882pcqfp0cgu8f3ib.apps.googleusercontent.com">
      <HashRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </HashRouter>
    </GoogleOAuthProvider>
  </StrictMode>,
)
