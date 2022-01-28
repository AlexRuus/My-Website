import React from 'react'
import './Navbar.css'
import {links} from './data.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFingerprint, faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    return (
    <nav className='header-components'>
        {/* <div className="logo-side">
            <FontAwesomeIcon icon={faFingerprint}/>
        </div> */}
        <div className='links'>
        {links.map((link) => {
            return (
              <a href={link.url} key={link.id}>
                {link.text}
              </a>
            )
          })}
        </div>
          <div className="dropdown">
            <FontAwesomeIcon icon={faBars}/>
          </div>
    </nav>

    )
}

export default Navbar
