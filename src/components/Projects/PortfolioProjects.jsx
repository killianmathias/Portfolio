import GitHubProjects from './GithubProjects'
import ProjectsHeader from './ProjectsHeader'
import './styles/projects.css'
import { useLanguage } from '../../contexts/LanguageContext'

const PortfolioProjects = () => {
  const { language } = useLanguage(); // Utiliser le contexte pour obtenir la langue
    const translations = language === "fr" ? require("../../locales/fr").default : require("../../locales/en").default;
  return (
    <div className="project-container">
        <ProjectsHeader button={false}/>
        <div className='description-container'>
            <p className='portfolio-description'>{translations.projectSubtitle}</p>
        </div>
        <GitHubProjects limit={10}/>
    </div>
  )
}

export default PortfolioProjects
