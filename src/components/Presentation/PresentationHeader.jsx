import PresentationTitle from './PresentationTitle';
import './styles/presentation.css';
import { Dot } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

function PresentationHeader() {
  const { language } = useLanguage(); // Utiliser le contexte pour obtenir la langue
    const translations = language === "fr" ? require("../../locales/fr").default : require("../../locales/en").default;
  return (
    <div className='presentationHeader'>
        <PresentationTitle text={translations.homeSection}/>
        {/* <div className='disponibility'>
            <Dot size={30} color='green'/>
            <h3 className='dispo_text'>DISPONIBLE POUR TRAVAILLER</h3>
        </div> */}
    </div>
  );
}

export default PresentationHeader;