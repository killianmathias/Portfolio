import React from 'react'
import ProjectCard from './ProjectCard'
import './styles/projects.css'
import { projects } from '../../data/projects'
import { useLanguage } from '../../contexts/LanguageContext'
import ProjectsHeader from './ProjectsHeader'

const OtherProjects = ({button, limit}) => {
    const { language } = useLanguage(); 
    const translations = language === "fr" ? require("../../locales/fr").default : require("../../locales/en").default;

    return (
        <div className="project-container">
            
             <ProjectsHeader button={button} title={translations.otherProjectsTitle}/>
          <div className='description-container'>
            <p className='portfolio-description'>{translations.otherProjectsSubtitle}</p>
        </div>
          <div className="github-projects">
            {projects.map((project, index) => {
                if (index >= limit) return;
                const translation = project.translations[language] || project.translations['en'];
                return (
                    <ProjectCard
                        key={project.id}
                        title={translation.title}
                        description={translation.description}
                        language={project.language}
                        id={project.id}
                    />
                )
            })}
          </div>
        </div>
    )
}

export default OtherProjects
