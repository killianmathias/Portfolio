
import './styles/presentation.css';
import source from '../../assets/image.jpg'

function PresentationImage() {
  return (
    <div className='presentationImage'>

        <img src={source} className='image' alt="Logo Killian Mathias"/>
        
    </div>
  );
}

export default PresentationImage;