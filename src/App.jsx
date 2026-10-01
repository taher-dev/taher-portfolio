import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import SiteBackground from './components/Background/SiteBackground'
import Sidebar from './components/Sidebar/Sidebar'
import Navbar from './components/Navbar/Navbar'
import Home from './components/pages/Home'
import Portfolio from './components/pages/Portfolio'
import Resume from './components/pages/Resume'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  const [lightMode, setLightMode] = useState(false)

  // Sync light mode class whenever toggled
  useEffect(() => {
    if (lightMode) {
      document.body.classList.add('lightmode')
    } else {
      document.body.classList.remove('lightmode')
    }
  }, [lightMode])

  return (
    <>
      <ScrollToTop />
      <SiteBackground />
      <main>
        <Sidebar />
        <div className="main-content">
          <Navbar
            lightMode={lightMode}
            setLightMode={setLightMode}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Portfolio />} />
            <Route path="/portfolio" element={<Navigate to="/projects" replace />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/about" element={<Navigate to="/" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </main>
    </>
  )
}

