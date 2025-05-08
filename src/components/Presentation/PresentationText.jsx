import Button from '../Button';
import './styles/presentation.css';

function PresentationText() {
  return (
    <div className='presentationText'>
        <h2>Je suis Killian Mathias</h2>
        <p>Étudiant en Informatique à l'Université Marie et Louis Pasteur à Besançon.</p>
        <div className='textButtons'>
            <Button name="Contacte moi" link={"/contact"}/>
            <Button name="En savoir plus sur moi" link={"/about"}/>
        </div>
    </div>
  );
}

export default PresentationText;