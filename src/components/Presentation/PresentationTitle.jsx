
import { Dot } from "lucide-react"
export default function PresentationTitle({text}) {
  return (
    <div className='work'>
            <Dot size={52} color='lightgrey'/>
            <h2 className='workname'>{text}</h2>
    </div>
  )
}
