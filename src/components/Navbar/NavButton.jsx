// src/components/NavButton.jsx
import './styles/Navbar.css';
import { CircleUserRound } from 'lucide-react';
import { Link } from 'react-router-dom';

function NavButton({ Icon = CircleUserRound, color = 'black', hoverColor = 'white', link = '#' }) {
    return (
        <div className="navButton">
            {link ? (
                <Link to={link}>
                    <Icon className="nav-icon" style={{ color }} data-hover-color={hoverColor} />
                </Link>
            ) : (
                <Icon className="nav-icon" style={{ color }} data-hover-color={hoverColor} />
            )}
        </div>
    );
}

export default NavButton;