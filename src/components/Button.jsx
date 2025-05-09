import './../App.css';
import { Link } from 'react-router-dom';
import { CircleUserRound } from 'lucide-react';


function Button({Icon = CircleUserRound,name, link,typeOfButton}) {
  return (
    <Link to={link} className='ButtonLink'>
      <div className={typeOfButton==='normal' ? "button" : "button-outline"}> 
          <p>{name}</p>
          <Icon className="buttonIcon" color={typeOfButton==='normal' ? "white" : "black"}/>
      </div>
    </Link>
  );
}

export default Button;