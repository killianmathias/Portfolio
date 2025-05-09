import PresentationHeader from './PresentationHeader';
import './styles/presentation.css';
import PresentationText from './PresentationText';
import PresentationImage from './PresentationImage';
import Projects from '../Projects/Projects';
import Socials from '../Socials/Socials';

function Presentation() {
  return (
    <div className='presentation'>
        <PresentationHeader/>
        <div className='content'>
            <PresentationText/>
            <PresentationImage/>
            
        </div>
        
    </div>
  );
}

export default Presentation;