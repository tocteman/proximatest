import proximaLogo from '../assets/Proxima_Logo.png'
import ContactButton from './ContactButton'
import { useState, useEffect } from 'react'

const Menu = () => {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset)
    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className= {`menu ${offset > 0 ? 'menu-shadow' : 'menu-transparent'}`}>
      <div className="menu-logo">
        <img alt="" src={proximaLogo}/>
        <h3> PROXIMA </h3>
      </div>
      <div className="menu-links">
        <a>About Us</a>
        <a>Nearshoring</a>
        <a>Insurtech</a>
        <a>Careers</a>
        <ContactButton/>
      </div>
    </nav>
  )
}

export default Menu
