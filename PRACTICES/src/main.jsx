import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
 import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
   <Auth0Provider
    domain="dev-v5rvzaypbmj733jk.us.auth0.com"
    clientId="tnmIzCMLp9lx641bWYEWB4RCWKkfhwax"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
    
  
)
