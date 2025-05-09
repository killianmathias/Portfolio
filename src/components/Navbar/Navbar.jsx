import './styles/Navbar.css';
import NavButton from './NavButton';
import { CircleUserRound, Folder, Home, MessageCircle} from 'lucide-react';
import Button from "../Button"

function Navbar() {
  return (
    <div className="navbar">
      <div className='navButtons'>
        <NavButton Icon={Home} color="black" link="/"/>
        <NavButton Icon={CircleUserRound} color="black" link="/about" />
        <NavButton Icon={Folder} color="black" link="/portfolio"/>
        {/* <NavButton Icon={MessageCircle} color="black" hoverColor="orange" /> */}
      </div>

      <div className='contact'>
        <Button name="Contacte moi" link={"/contact"} typeOfButton='normal' Icon={MessageCircle}/>
      </div>
    </div>
  );
}

export default Navbar;