import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './header.css';

function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [academicsDropdown, setAcademicsDropdown] = useState(false);

  useEffect(() => {
    const header = document.querySelector('header');
    const section = document.querySelector('section');

    if (menuActive) {
      if (header && section) {
        header.classList.add('active');
        section.classList.add('active');
      }
    } else {
      if (header && section) {
        header.classList.remove('active');
        section.classList.remove('active');
      }
    }

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [menuActive]);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div>
      <header className={`${menuActive ? 'active' : ''} ${scrolled ? 'scrolled' : ''}`}>
        <Link to="/" className="logo">FTV Salon</Link>
        <div className="menuToggle" onClick={toggleMenu}></div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/Service">Service</Link></li>
            
            {/* Academics Dropdown */}
            {/* <li
              className="academics-dropdown"
              onMouseEnter={() => setAcademicsDropdown(true)}
              onMouseLeave={() => setAcademicsDropdown(false)}
            >
              <Link to="#">Academics</Link>
              {academicsDropdown && (
                <div className="dropdown">
                  <ul>
                    <li><Link to="/contest">Contest</Link></li>
                    <li><Link to="/courses">Courses</Link></li>
                  </ul>
                </div>
              )}
            </li> */}

            <li><Link to="/contest">Contest</Link></li>

            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/sign-up">SignUp</Link></li>
            <li className='wap'>
              <Link target="_blank" to="https://wa.me/9212758888">
                <FontAwesomeIcon icon={faWhatsapp} />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
