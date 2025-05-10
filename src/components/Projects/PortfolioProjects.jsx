import GitHubProjects from './GithubProjects'
import ProjectsHeader from './ProjectsHeader'
import './styles/projects.css'

const PortfolioProjects = () => {
  return (
    <div className="project-container">
        <ProjectsHeader button={false}/>
        <div className='description-container'>
            <p className='portfolio-description'>Découvrez mes travaux, mêlant jeux vidéo, sites web et applications mobiles et tous aussi créatifs les uns que les autres.</p>
        </div>
        <GitHubProjects limit={10}/>
    </div>
  )
}

export default PortfolioProjects
