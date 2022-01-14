import React from 'react'
import './Buttons.css'

function Buttons() {
    return (
    <nav className='header-components'>
        <div className="logo-side">
            <h1>Alex Rus</h1>
        </div>
        <ul class="navigation">
            <button>About</button>
            <button>Projects</button>
            <button>Skills</button>
            <button>Contact</button>
            <button class="burger-menu" id="burger-menu">
                In Progress
            </button>
        </ul>
    </nav>

    )
}

export default Buttons
