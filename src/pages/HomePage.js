import './../App.css';

import Navbar from '../components/Navbar/Navbar';
import Presentation from '../components/Presentation/Presentation';
import Footer from '../components/Footer/Footer';
import Projects from '../components/Projects/Projects';
import OtherProjects from '../components/Projects/OtherProjects';
import ProjectsHeader from '../components/Projects/ProjectsHeader';
import Socials from '../components/Socials/Socials';
import { useLanguage } from "../contexts/LanguageContext"; 

function HomePage() {
  const { language } = useLanguage(); // Utiliser le contexte pour obtenir la langue
  const translations = language === "fr" ? require("../locales/fr").default : require("../locales/en").default;
  return (
    <div className="App">
      <div className="App-header">
        <Navbar/>
        <div className='page-content'>
          <Presentation/>
          <Projects/>
          <OtherProjects limit={3} button={true}/>
          <Socials/>
          <Footer translation={translations}/>
        </div>
      </div>
      
    </div>
  );
}

export default HomePage;
