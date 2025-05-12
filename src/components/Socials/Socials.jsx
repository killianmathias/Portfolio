import React from 'react'
import './styles/socials.css'
import PresentationTitle from '../Presentation/PresentationTitle'
import SocialButton from './SocialButton'
import { useLanguage } from '../../contexts/LanguageContext'

function Socials() {
  
    const { language } = useLanguage(); // Utiliser le contexte pour obtenir la langue
    const translations = language === "fr" ? require("../../locales/fr").default : require("../../locales/en").default;
  return (
    <div className='socials'>
        <div className='title'>
            <PresentationTitle text={translations.socials}/>
        </div>
        <div className='socials-buttons'>
            <SocialButton name='linkedin' link='https://www.linkedin.com/in/killian-mathias-973821316/'/>
            <SocialButton name='twitter' link='https://x.com/killian_mths?s=21'/>
            <SocialButton name='instagram' link='#'/>
            <SocialButton name='github' link='https://github.com/killianmathias'/>
        </div>
    </div>
  )
}

export default Socials