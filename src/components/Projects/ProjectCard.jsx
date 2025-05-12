import React from 'react'
import './styles/projects.css'
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import DetailPage from '../../pages/DetailPage';

function ProjectCard({title, description,language, id}) {
    var languageMin = '';
    if (language == 'C++'){
        languageMin = 'cplusplus';
    }else{
        languageMin = language ? language.toLowerCase() : 'default';
    }
    const iconClass = `devicon-${languageMin}-plain colored`;
  return (
    <Link to={`/details/${id}`} className='project-card'>
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
    </Link>
  )
}

export default ProjectCard