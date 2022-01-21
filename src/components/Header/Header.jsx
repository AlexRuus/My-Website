import React from 'react'
import { useState } from 'react'
import Navbar from '../Navigation/Navbar'
import './Header.css'

function Header() {

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
        <div className={ background ? 'header-box active' : 'header-box'}>
            <Navbar />
        </div>
    )
}

export default Header
