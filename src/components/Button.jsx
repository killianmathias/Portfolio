import './../App.css';
import { Link } from 'react-router-dom';

function Button({name, link}) {
  return (
    <Link to={link} className='ButtonLink'>
      <div className="button">
          <p>{name}</p>
      </div>
    </Link>
  );
}

export default Button;