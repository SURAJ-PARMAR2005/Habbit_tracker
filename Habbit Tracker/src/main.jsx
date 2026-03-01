import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { PlayerProvider } from './Context/PlayerContext.jsx'
import axios from 'axios'

axios.defaults.withCredentials = true;
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <PlayerProvider>
    <App />
    </PlayerProvider>
    </BrowserRouter>
  
)
