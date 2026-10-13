import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './web_Davis'
import TallerPage from './pages/TallerPage'
import LegalPage from './pages/LegalPage'
import SentinelPage from './pages/SentinelPage'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sentinel" element={<SentinelPage />} />
        <Route path="/sentinel/terminos" element={<LegalPage page="sentinel" />} />
        <Route path="/taller" element={<TallerPage />} />
        <Route path="/privacidad" element={<LegalPage page="privacidad" />} />
        <Route path="/terminos" element={<LegalPage page="terminos" />} />
        <Route path="/seguridad" element={<LegalPage page="seguridad" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
