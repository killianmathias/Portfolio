import './../App.css';

import Navbar from '../components/Navbar/Navbar';
import Presentation from '../components/Presentation/Presentation';

function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Presentation/>

        
      </header>
      
    </div>
  );
}

export default HomePage;
