import { useState, useEffect } from 'react'
import SiteBackground from './components/Background/SiteBackground'
import Sidebar from './components/Sidebar/Sidebar'
import Navbar from './components/Navbar/Navbar'
import Home from './components/pages/Home'
import Portfolio from './components/pages/Portfolio'

const PAGES = {
  home: Home,
  portfolio: Portfolio,
  projects: Portfolio,
}

export default function App() {
  const [activePage, setActivePage] = useState('home')
  const [lightMode, setLightMode] = useState(false)

  // Sync light mode class whenever toggled
  useEffect(() => {
    if (lightMode) {
      document.body.classList.add('lightmode')
    } else {
      document.body.classList.remove('lightmode')
    }
  }, [lightMode])

  const PageComponent = PAGES[activePage]

  return (
    <>
      <SiteBackground />
      <main>
        <Sidebar />
        <div className="main-content">
          <Navbar
            activePage={activePage}
            setActivePage={setActivePage}
            lightMode={lightMode}
            setLightMode={setLightMode}
          />
          <PageComponent setActivePage={setActivePage} />
        </div>
      </main>
    </>
  )
}
