import React from 'react'
import './FirstPageContent.css'
import Typewriter from 'typewriter-effect';

function FirstPage() {
    return (
        <div className='first-page-content'>
            <div className="my-photo-div">
                <div className="photo-container">
                    <img className='img' src='./image/black-concrete-wall.jpg' alt='something123'></img>
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
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus iure magni quasi voluptas odio earum est voluptatem error tenetur dolor necessitatibus inventore mollitia, voluptatum quas optio. Aut quis vitae libero placeat. Doloribus totam expedita consectetur voluptates officia error, recusandae assumenda dolorum quam necessitatibus ipsa voluptas sunt temporibus quasi quae dolore reiciendis debitis numquam ipsam rerum voluptate, esse praesentium obcaecati perspiciatis? Tempora maiores cumque modi consequuntur natus consectetur excepturi possimus amet quod ipsum omnis delectus magni, et harum, ducimus minus ratione, ullam molestiae earum. Temporibus consequatur deleniti magnam debitis veniam, eveniet harum fugit ipsum sunt incidunt placeat ab numquam? Quis dolor illo est officiis repudiandae aliquid suscipit id impedit nihil quasi iste reprehenderit consequatur nesciunt, blanditiis veritatis, voluptatum sequi! Atque eos laudantium vero nam dolor. Provident libero at ipsa consectetur vitae reiciendis iusto eum eaque, quo id et dolor excepturi non nihil quidem sint atque beatae itaque nisi pariatur quis assumenda!</p>
                    </div>
                    <div className="my-resume">
                        <a href=''>My resume</a>
                    </div>
            </div>
        </div>
    )
}

export default FirstPage

