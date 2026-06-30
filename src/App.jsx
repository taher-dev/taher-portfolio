import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Navbar from './components/Navbar/Navbar'
import About from './components/pages/About'
import Resume from './components/pages/Resume'
import Portfolio from './components/pages/Portfolio'

const PAGES = {
  about: About,
  resume: Resume,
  portfolio: Portfolio,
}

export default function App() {
  const [activePage, setActivePage] = useState('about')
  const [lightMode, setLightMode] = useState(
    () => localStorage.getItem('lightMode') === 'active'
  )

  // Sync light mode class + localStorage whenever it changes
  useEffect(() => {
    if (lightMode) {
      document.body.classList.add('lightmode')
      localStorage.setItem('lightMode', 'active')
    } else {
      document.body.classList.remove('lightmode')
      localStorage.setItem('lightMode', null)
    }
  }, [lightMode])

  const PageComponent = PAGES[activePage]

  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <Navbar
          activePage={activePage}
          setActivePage={setActivePage}
          lightMode={lightMode}
          setLightMode={setLightMode}
        />
        <PageComponent />
      </div>
    </main>
  )
}
