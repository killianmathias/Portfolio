import './../App.css';

import Navbar from '../components/Navbar/Navbar';
import Presentation from '../components/Presentation/Presentation';
import Footer from '../components/Footer/Footer';
import Projects from '../components/Projects/Projects';
import Socials from '../components/Socials/Socials';

function HomePage() {
  return (
    <div className="App">
      <div className="App-header">
        <Navbar/>
        <div className='homepage-content'>
          <Presentation/>
          <Projects/>
          <Socials/>
          <Footer/>
        </div>
      </div>
      
    </div>
  );
}

export default HomePage;
