import './Header.css';
import Nav from '../Nav/Nav';

const Header = () => {
    return (
        <header>
            <div className="pixel-text logo-text">Val.bytes</div>
            <Nav />
        </header>
    );
};

export default Header;