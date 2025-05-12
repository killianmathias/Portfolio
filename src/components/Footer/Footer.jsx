import React from 'react'
import './styles/footer.css'
import { useLanguage } from '../../contexts/LanguageContext';
function Footer() {
  const { language } = useLanguage(); // Utiliser le contexte pour obtenir la langue
  const translations = language === "fr" ? require("../../locales/fr").default : require("../../locales/en").default;
  return (
    <div className='footer'>
      <p>{translations.footerText}</p>
    </div>
  )
}

export default Footer