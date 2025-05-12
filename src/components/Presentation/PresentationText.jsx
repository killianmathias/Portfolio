import { ArrowUpRight, MessageCircle } from 'lucide-react';
import Button from '../Button';
import './styles/presentation.css';
import { useLanguage } from '../../contexts/LanguageContext';


function PresentationText() {
  const { language } = useLanguage(); // Utiliser le contexte pour obtenir la langue
    const translations = language === "fr" ? require("../../locales/fr").default : require("../../locales/en").default;
  return (
    <div className='presentationText'>
        <h2>{translations.homeTitle}</h2>
        <p>{translations.homeSubtitle}</p>
        <div className='textButtons'>
            <Button name={translations.homeButtonLeft} link={"/contact"} typeOfButton='normal' Icon={MessageCircle}/>
            <Button name={translations.homeButtonRight} link={"/about"} typeOfButton='outline' Icon={ArrowUpRight}/>
        </div>
    </div>
  );
}

export default PresentationText;