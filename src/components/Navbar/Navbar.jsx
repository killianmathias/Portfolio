// src/components/Navbar/Navbar.jsx
import './styles/Navbar.css';
import NavButton from './NavButton';
import { CircleUserRound, Folder, Home, MessageCircle } from 'lucide-react';
import Button from "../Button";
import LanguageSwitcher from "../LanguageSwitcher"; // Assurez-vous d'importer le LanguageSwitcher
import { useLanguage } from "../../contexts/LanguageContext"; // Importer le hook pour accéder au contexte

function Navbar() {
  const { language, setLanguage } = useLanguage(); // Utiliser le contexte pour obtenir language et setLanguage
  const translations = language === "fr" ? require("../../locales/fr").default : require("../../locales/en").default;
  return (
    <div className="navbar">
      <div className='navButtons'>
        <NavButton Icon={Home} color="black" link="/"/>
        <NavButton Icon={CircleUserRound} color="black" link="/about" />
        <NavButton Icon={Folder} color="black" link="/portfolio"/>
        {/* <NavButton Icon={MessageCircle} color="black" hoverColor="orange" /> */}
      </div>

      

      <div className='contact'>
        <Button name={translations.homeButtonLeft} link={"/contact"} typeOfButton='normal' Icon={MessageCircle}/>
      </div>
      <div className="navbar-right">
        {/* Ajouter ici le LanguageSwitcher */}
        <LanguageSwitcher language={language} setLanguage={setLanguage} />
      </div>
    </div>
  );
}

export default Navbar;