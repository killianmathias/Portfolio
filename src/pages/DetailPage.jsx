import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Detail from '../components/Detail/Detail'
import Socials from '../components/Socials/Socials'
import { useParams } from 'react-router-dom';
import { useLanguage } from "../contexts/LanguageContext"; 

function DetailPage() {

  const { id } = useParams();
  const { language } = useLanguage(); // Utiliser le contexte pour obtenir la langue
  const translations = language === "fr" ? require("../locales/fr").default : require("../locales/en").default;

  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <div className='page-content'>
          <Detail projectId={id}/>
          <Socials/>
          <Footer translation={translations}/>
        </div>
        
      </header>
      
    </div>
  )
}

export default DetailPage