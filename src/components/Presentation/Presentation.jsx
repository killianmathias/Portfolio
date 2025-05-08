import PresentationHeader from './PresentationHeader';
import './styles/presentation.css';
import PresentationText from './PresentationText';
import PresentationImage from './PresentationImage';

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