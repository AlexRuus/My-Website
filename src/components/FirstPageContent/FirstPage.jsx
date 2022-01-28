import React from 'react'
import './FirstPageContent.css'
import Typewriter from 'typewriter-effect';

function FirstPage() {
    return (
        <div className='first-page-content'>
            <div className="my-photo-div">
                <div className="photo-container">
                    <img className='img' src='/My-Website/imgs/resized-personal-photo.png' alt='something123'></img>
                </div>
            </div>
            <div className="about-me">
                    <div className="about-text">
                        <h1>I'm Alex and <b className='text-animation'>
                            <Typewriter 
                                options={{
                                    strings: ['I love coding', 'I like computers',"I'm a dog lover"],
                                    autoStart: true,
                                    loop: true,
                                }} 
                            />
                            </b>
                            </h1>
                        <p>Hi, my name is Alex and I'm an entusiastic developer who will to learn more. I start my journey a short time ago based on my passion for computers and programming. In this time I developed some application with technologies such as JavaScrip, ReactJs, HTML , CSS where i keep my progress saved and organized with Git. From now I'm open to learn more about web development and I'm curious to learn about mobile development too. My plans for future is to become a greater developer, to improve myself and boost up my skills and to share my knowladge with others</p>
                    </div>
                    <div className="my-resume">
                        <a href='/cv_alex.pdf' download='cv_alex.pdf'>My resume</a>
                    </div>
            </div>
        </div>
    )
}

export default FirstPage

