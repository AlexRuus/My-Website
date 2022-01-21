import React from 'react'
import './Navbar.css'
import {links} from './data.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFingerprint } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    return (
    <nav className='header-components'>
        <div className="logo-side">
            <FontAwesomeIcon icon={faFingerprint} rotation={360}/>
        </div>
        <div className='links'>
        {links.map((link) => {
            return (
              <a href={link.url} key={link.id}>
                {link.text}
              </a>
            )
          })}
        </div>
    </nav>

    )
}

export default Navbar
