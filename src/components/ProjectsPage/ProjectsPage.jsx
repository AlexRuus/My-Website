import React from 'react'
import Card from './Card'
import './ProjectsPage.css'

function ProjectsPage() {
    return (
        <div className='projects-page-content'>
            <div className="context">
                <h1>These are some of my projects</h1>
            </div>
            <div className="projects-cards">
                <div className="project-1">
                    <Card 
                    img='/My-Website/imgs/oopgame.png'
                    path='https://github.com/AlexRuus/SIIT-Alex-Rus/tree/main/10-OOP-Game'
                    />
                </div>
                <div className="project-2">
                    <Card 
                    img='/My-Website/imgs/userdata.png'
                    path='https://github.com/AlexRuus/SIIT-Alex-Rus/tree/main/09-UserData-Form/09-UserData-Form'
                    />
                </div>
                <div className="project-3">
                    <Card 
                    img='/My-Website/imgs/dogapi.png'
                    path='https://github.com/AlexRuus/SIIT-Alex-Rus/blob/main/08-DogApi/Task2'
                    />
                </div>
            </div>
        </div>
    )
}

export default ProjectsPage