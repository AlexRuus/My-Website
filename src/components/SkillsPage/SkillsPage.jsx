import React from 'react'
import './SkillsPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faReact, faHtml5, faCss3, faFigma, faJs, faGithub} from '@fortawesome/free-brands-svg-icons'
import { ProgressBar } from './ProgressBar'

function SkillsPage() {
    return (
        <div className='skills-page-content'>
            {/*  */}
            <div className="html-info">
                <div className="html-logo">
                    <FontAwesomeIcon icon={faHtml5}/>
                </div>
                <div className="html-text">
                    <p>Html</p>
                    <ProgressBar done='90'/>
                </div>
            </div>
            {/*  */}
            {/*  */}
            <div className="css-info">
                <div className="css-logo">
                    <FontAwesomeIcon icon={faCss3} id='test'/>
                </div>
                <div className="css-text">
                    <p>CSS</p>
                    <ProgressBar done='90'/>
                </div>
            </div>
            {/*  */}
            {/*  */}
            <div className="javascript-info">
                <div className="javascript-logo">
                    <FontAwesomeIcon icon={faJs}/>
                </div>
                <div className="javascript-text">
                    <p>JavaScript</p>
                    <ProgressBar done='65'/>
                </div>
            </div>
            {/*  */}
            {/*  */}
            <div className="react-info">
                <div className="react-logo">
                    <FontAwesomeIcon icon={faReact}/>
                </div>
                <div className="react-text">
                    <p>ReactJs</p>
                    <ProgressBar done='55'/>
                </div>
            </div>
            {/*  */}
            {/*  */}
            <div className="figma-info">
                <div className="figma-logo">
                    <FontAwesomeIcon icon={faFigma}/>
                </div>
                <div className="figma-text">
                    <p>Figma</p>
                    <ProgressBar done='25'/>
                </div>
            </div>
            {/*  */}
            {/*  */}
            <div className="git-info">
                <div className="git-logo">
                    <FontAwesomeIcon icon={faGithub}/>
                </div>
                <div className="git-text">
                    <p>Git</p>
                    <ProgressBar done='50'/>
                </div>
            </div>
        </div>
    )
}

export default SkillsPage
