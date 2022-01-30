import React from 'react'
import './Navbar.css'
import {links} from './data.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFingerprint, faBars } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'

function Navbar() {

  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])


  const[background, setBackground] = useState(false);


  const changeBackground = () => {
      if(window.scrollY >= 80){
          setBackground(true)
      } else {
          setBackground(false)
      }
  }

  window.addEventListener('scroll', changeBackground)

  
    return (
    <nav className={ background ? 'header-box active' : 'header-box'}>
        {(toggleMenu || screenWidth > 500) && (
          <ul className='list'>
        {links.map((link) => {
            return (
                <li className='items'>
                  <a href={link.url} key={link.id}>
                  {link.text}
              </a>
              </li>
            )
          })}
          </ul>
        )}
          <button onClick={toggleNav} className='btn'>
            <FontAwesomeIcon icon={faBars}/>
          </button>
    </nav>

    )
}

export default Navbar
