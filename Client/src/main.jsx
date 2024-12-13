import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import UserLoginStore from './context/UserLoginStore.jsx';

createRoot(document.getElementById('root')).render(
  <UserLoginStore>
    <App />
  </UserLoginStore>,
)
