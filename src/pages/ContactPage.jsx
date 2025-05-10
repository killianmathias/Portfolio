import './../App.css';
import Button from '../components/Button'
import Navbar from '../components/Navbar/Navbar';
import { Contact } from '../components/Contact/Contact';
import Socials from '../components/Socials/Socials';
import Footer from '../components/Footer/Footer';

function ContactPage() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <div className='homepage-content'>
          <Contact/>
          <Socials/>
          <Footer/>
        </div>
      </header>
      
    </div>
  );
}

export default ContactPage;
