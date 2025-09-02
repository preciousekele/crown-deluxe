import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleMenu, setMenuOpen } from '../../redux/slices/navigationSlice'
import './Header.css'
import logoImg from '../../../public/images/logo.png'
const Header = ({ onNavigate }) => {
  const dispatch = useDispatch()
  const { activeSection, isMenuOpen } = useSelector(state => state.navigation)

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'offer', label: 'What we offer' },
    { id: 'services', label: 'Products' },
    { id: 'partners', label: 'Our Partners' },
    { id: 'contact', label: 'Contact us' }
  ]

  const handleNavClick = (sectionId) => {
    onNavigate(sectionId)
    dispatch(setMenuOpen(false))
  }

  const handleMenuToggle = () => {
    dispatch(toggleMenu())
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
         <img src={logoImg} alt="crown deluxe logo" className="logo-image" />
        </div>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            {navItems.map(item => (
              <li key={item.id} className="nav-item">
                <button 
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <button 
          className="menu-toggle"
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header