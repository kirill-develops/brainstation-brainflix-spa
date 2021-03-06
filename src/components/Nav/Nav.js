import { Link } from 'react-router-dom';
import logo from '../../assets/Logo/BrainFlix-logo.svg';
import avatar from '../../assets/Images/Mohan-muruge.jpg';
import './Nav.scss';

const Nav = () => {

  return (
    <nav className="nav">
      <Link to="/" className='nav__link'>
        <img src={logo} className="nav__logo" alt="site logo"></img>
      </Link>
      <form className="nav__form">
          <input type="search"
            name="search"
            placeholder="Search"
            className="nav__search"
          />
        <div className='nav__avatar-housing'>
          <img src={avatar}
            htmlFor="search"
            alt="user avatar"
            className="nav__avatar"
          />
        </div>
        <Link to="/Upload" className='nav__button nav__button-text'>
          <span className='nav__button-text'>
            UPLOAD
          </span>
        </Link>
      </form>
    </nav>
  );
};

export default Nav;