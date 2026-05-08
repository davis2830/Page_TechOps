import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './web_Davis'
import TallerPage from './pages/TallerPage'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/taller" element={<TallerPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
