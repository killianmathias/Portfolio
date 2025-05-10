import GitHubProjects from './GithubProjects'
import ProjectsHeader from './ProjectsHeader'
import './styles/projects.css'

const Projects = () => {
  return (
    <div className="project-container">
        <ProjectsHeader button={true}/>
        <GitHubProjects limit={3}/>
    </div>
  )
}

export default Projects
