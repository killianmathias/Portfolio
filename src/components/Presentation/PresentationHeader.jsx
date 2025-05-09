import PresentationTitle from './PresentationTitle';
import './styles/presentation.css';
import { Dot } from 'lucide-react';

function PresentationHeader() {
  return (
    <div className='presentationHeader'>
        <PresentationTitle text="Étudiant en Informatique"/>
        {/* <div className='disponibility'>
            <Dot size={30} color='green'/>
            <h3 className='dispo_text'>DISPONIBLE POUR TRAVAILLER</h3>
        </div> */}
    </div>
  );
}

export default PresentationHeader;