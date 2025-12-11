import { Ellipsis } from "lucide-react"
import Button from "../Button"
import PresentationTitle from "../Presentation/PresentationTitle"
import { useLanguage } from '../../contexts/LanguageContext'
import './styles/projects.css'

function ProjectsHeader({button, title}) {
  const { language } = useLanguage(); // Utiliser le contexte pour obtenir la langue
    const translations = language === "fr" ? require("../../locales/fr").default : require("../../locales/en").default;
  return (
    <div className="project-header">
        <PresentationTitle text={title || translations.projectTitle}/>
        {button ?
          <div className="project-seemore">
            <Button  typeOfButton='outline' name={translations.homeProjectButton} link='./portfolio' Icon={Ellipsis}/>
          </div> : <></>
        } 
    </div>
  )
}

export default ProjectsHeader