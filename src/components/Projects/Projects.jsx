import GitHubProjects from './GithubProjects'
import ProjectsHeader from './ProjectsHeader'
import './styles/projects.css'

const Projects = () => {
  return (
    <div className="project-container">
        <ProjectsHeader/>
        <GitHubProjects/>
    </div>
  )
}

export default Projects
