// src/components/NavButton.jsx
import './styles/Navbar.css';
import { CircleUserRound } from 'lucide-react';
import { Link } from 'react-router-dom';

function NavButton({ Icon = CircleUserRound, color = 'grey', link = '#' }) {
    return (
        <div className="navButton">
            
            {link ? (
                <Link to={link}>
                    <Icon className="nav-icon" color={color}/>
                </Link>
            ) : (
                <Icon className="nav-icon" color={color}/>
            )}
        </div>
    );
}

export default NavButton;