import './../App.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import PortfolioProjects from '../components/Projects/PortfolioProjects';

function PortfolioPage() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <div className='portfoliopage-content'>
          <PortfolioProjects/>
          <Footer/>
        </div>
      </header>
      
    </div>
  );
}

export default PortfolioPage;
