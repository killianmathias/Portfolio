import React from 'react'
import './styles/projects.css'
import { ChevronRight } from 'lucide-react';
function ProjectCard({title, description,language,link}) {
    const languageMin = language ? language.toLowerCase() : 'default';
    const iconClass = `devicon-${languageMin}-plain colored`;
  return (
    <a href={link} className='project-card'>
        {/* <div className='project-card'> */}
            <div className='content-left'>
                <h1>{title}</h1>
                <p>{description}</p>
                <div className='project-langage'>
                    <i className={iconClass}></i>
                    <p>{language}</p>
                </div>
            </div>
            <div className='content-right'>
                <ChevronRight color='black'/>
            </div>
        {/* </div> */}
    </a>
  )
}

export default ProjectCard