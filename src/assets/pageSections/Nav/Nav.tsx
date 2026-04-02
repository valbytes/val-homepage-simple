import { Link } from '@tanstack/react-router';
import './Nav.css';

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/" hash="portfolio-anchor">Portfolio</Link></li>
                <li><Link to="/" hash="about-anchor">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;