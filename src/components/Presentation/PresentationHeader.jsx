import './styles/presentation.css';
import { Dot } from 'lucide-react';

function PresentationHeader() {
  return (
    <div className='presentationHeader'>
        <div className='work'>
            <Dot size={52} color='lightgrey'/>
            <h2 className='workname'>Étudiant en Informatique</h2>
        </div>
        <div className='disponibility'>
            <Dot size={30} color='green'/>
            <h3 className='dispo_text'>DISPONIBLE POUR TRAVAILLER</h3>
        </div>
    </div>
  );
}

export default PresentationHeader;