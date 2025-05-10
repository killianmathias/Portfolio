import './../App.css';
import Button from '../components/Button'
import Navbar from '../components/Navbar/Navbar';
import About from '../components/About/About';
import Socials from '../components/Socials/Socials';
import Footer from '../components/Footer/Footer';
function AboutPage() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <div className='aboutpage-content'>
          <About/>
          <Socials/>
          <Footer/>
        </div>
        
      </header>
      
    </div>
  );
}

export default AboutPage;
