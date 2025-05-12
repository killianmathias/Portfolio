import './../App.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import PortfolioProjects from '../components/Projects/PortfolioProjects';
import { useLanguage } from "../contexts/LanguageContext"; 

function PortfolioPage() {
  const { language } = useLanguage(); // Utiliser le contexte pour obtenir la langue
  const translations = language === "fr" ? require("../locales/fr").default : require("../locales/en").default;
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <div className='page-content'>
          <PortfolioProjects/>
          <Footer translation={translations}/>
        </div>
      </header>
      
    </div>
  );
}

export default PortfolioPage;
