import './../App.css';
import Button from '../components/Button'
import Navbar from '../components/Navbar/Navbar';
import About from '../components/About/About';
import Socials from '../components/Socials/Socials';
import Footer from '../components/Footer/Footer';
import { useLanguage } from "../contexts/LanguageContext"; 
function AboutPage() {
  const { language } = useLanguage(); // Utiliser le contexte pour obtenir la langue

  // Choisir les traductions en fonction de la langue
  const translations = language === "fr" ? require("../locales/fr").default : require("../locales/en").default;

  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <div className='page-content'>
          <About/>
          <Socials/>
          <Footer translation={translations}/>
        </div>
        
      </header>
      
    </div>
  );
}

export default AboutPage;
