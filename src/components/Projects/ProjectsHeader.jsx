import { Ellipsis } from "lucide-react"
import Button from "../Button"
import PresentationTitle from "../Presentation/PresentationTitle"


function ProjectsHeader() {
  return (
    <div className="project-header">
        <PresentationTitle text="Mes projets"/>
        <div className="project-seemore">
        <Button  typeOfButton='outline' name="Voir plus" link='./portfolio' Icon={Ellipsis}/>
        </div>
    </div>
  )
}

export default ProjectsHeader