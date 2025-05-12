import './../App.css';
import Navbar from '../components/Navbar/Navbar';
import { Contact } from '../components/Contact/Contact';
import Socials from '../components/Socials/Socials';
import Footer from '../components/Footer/Footer';
import { useLanguage } from "../contexts/LanguageContext"; 


function ContactPage() {

  const { language } = useLanguage(); // Utiliser le contexte pour obtenir la langue
  // Choisir les traductions en fonction de la langue
  const translations = language === "fr" ? require("../locales/fr").default : require("../locales/en").default;

  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <div className='page-content'>
          <Contact/>
          <Socials/>
          <Footer translation={translations}/>
        </div>
      </header>
      
    </div>
  );
}

export default ContactPage;
