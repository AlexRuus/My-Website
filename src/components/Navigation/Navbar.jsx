import React from 'react'
import './Navbar.css'
import {links} from './data.js'

function Navbar() {
    return (
    <nav className='header-components'>
        <div className="logo-side">
            <h1>Alex Rus</h1>
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
