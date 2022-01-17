import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-content'>
            <div className="my-info">
                <p>Name</p>
                <p>Phone</p>
                <p>Email</p>
                <p>Adress</p>
            </div>
            <div className="contact-form">
                <p>Name</p>
                <input type="" />
                <p>Surname</p>
                <input type="" />
                <p>Email</p>
                <input type="" />
                <button>submit</button>
            </div>
        </div>
    )
}

export default Footer