import './styles/Navbar.css';
import NavButton from './NavButton';
import { CircleUserRound, Folder, Home, MessageCircle} from 'lucide-react';

function Navbar() {
  return (
    <div className="navbar">
        <NavButton Icon={Home} color="black" hoverColor="red" link="/"/>
        <NavButton Icon={CircleUserRound} color="black" hoverColor="green" link="/about" />
        <NavButton Icon={Folder} color="black" hoverColor="orange" />
        <NavButton Icon={MessageCircle} color="black" hoverColor="orange" />
    </div>
  );
}

export default Navbar;