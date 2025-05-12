import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Detail from '../components/Detail/Detail'

import { useParams } from 'react-router-dom';
function DetailPage() {

  const { id } = useParams();

  

  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <div className='detailpage-content'>
          <Detail projectId={id}/>
          <Footer/>
        </div>
        
      </header>
      
    </div>
  )
}

export default DetailPage