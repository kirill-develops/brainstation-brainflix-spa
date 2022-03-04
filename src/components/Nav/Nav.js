import { Link } from 'react-router-dom';
import './Nav.scss';
import logo from '../../assets/Logo/BrainFlix-logo.svg';
import avatar from '../../assets/Images/Mohan-muruge.jpg';

const Nav = () => {

  return (
    <nav className="nav">
      <Link to="/" className='nav__link'>
        <img src={logo} className="nav__logo" alt="site logo"></img>
      </Link>
      <form className="nav__form">
        <div className="nav__mobile-form">
          <input type="search" name="search" className="nav__search" placeholder="Search"></input>
          <Link to="/UploadPage" className=''>
            <button className='nav__button--tablet nav__button-text'>
              UPLOAD
            </button>
          </Link>
          <img src={avatar} className="nav__avatar" alt="user avatar" htmlFor="search"></img>
        </div>
        <Link to="/UploadPage" >
          <button className="nav__button nav__button-text">
            UPLOAD
          </button>
        </Link>
      </form>
    </nav>
  );
};

export default Nav;