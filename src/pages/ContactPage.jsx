import './../App.css';
import Button from '../components/Button'
import Navbar from '../components/Navbar/Navbar';
import { Contact } from '../components/Contact/Contact';

function ContactPage() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <div className='homepage-content'>
        <Contact/>
        </div>
      </header>
      
    </div>
  );
}

export default ContactPage;
