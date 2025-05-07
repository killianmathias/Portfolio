import './../App.css';
import Button from '../components/Button'
import Navbar from '../components/Navbar/Navbar';

function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <p>Je suis Killian Mathias, étudiant en informatique à l'université de Besançon</p>
        <Button/>
      </header>
      
    </div>
  );
}

export default HomePage;
