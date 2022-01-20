import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub , faLinkedin , faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'
import './Home.css'
import Typewriter from 'typewriter-effect';

function Home() {
  return (
    <div className='home-page-content'>
        <div className="presentation-text">
            <p className='first-p-line'>Hello, my name is</p>
            <p className='second-p-line'>Alex Rus</p>
            <p className='third-p-line'>and I'm a<b className='auto-type'>
            <Typewriter
                options={{
                    strings: ['Web Developer'],
                    autoStart: true,
                    loop: true,
                  }}      
            />
            </b>
            </p>
            <a href='#footer'> Contact me</a>
        </div>
        <div className="social-links">
            <a href='https://github.com/AlexRuus' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className='github'/></a>
            <a href='https://www.linkedin.com/in/rus-alexandru-6a4209213/' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a>
            <a href='https://www.facebook.com/alex.rus.5/' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook}/></a>
            <a href='https://www.instagram.com/alexrus9/' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram}/></a>
        </div>
    </div>
  )
}

export default Home;
