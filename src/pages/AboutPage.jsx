import './../App.css';
import Button from '../components/Button'
import Navbar from '../components/Navbar/Navbar';

function AboutPage() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <p>Je suis Killian le GOAT, étudiant en informatique à l'université de Besançon</p>
        <Button/>
      </header>
      
    </div>
  );
}

export default AboutPage;
