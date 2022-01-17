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
                    <Card img='https://images.unsplash.com/photo-1546636889-ba9fdd63583e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RyZWV0fGVufDB8fDB8fA%3D%3D&w=1000&q=80'/>
                </div>
                <div className="project-2">
                    <Card img='https://images.unsplash.com/photo-1546636889-ba9fdd63583e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RyZWV0fGVufDB8fDB8fA%3D%3D&w=1000&q=80'/>
                </div>
                <div className="project-3">
                    <Card img='https://images.unsplash.com/photo-1546636889-ba9fdd63583e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RyZWV0fGVufDB8fDB8fA%3D%3D&w=1000&q=80'/>
                </div>
            </div>
        </div>
    )
}

export default ProjectsPage