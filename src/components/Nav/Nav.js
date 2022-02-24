import React from "react";
import './Nav.scss';
import logo from '../../assets/Logo/BrainFlix-logo.svg';
import avatar from '../../assets/Images/Mohan-muruge.jpg';

const Nav = () => {

  return (
    <nav className="nav">
      <img src={logo} className="nav__logo" alt="site logo"></img>
      <form className="nav__form">
        <div className="nav__mobile-form">
          <input type="text" name="search" className="nav__search" placeholder="Search"></input>
          <button className="nav__button--tablet">UPLOAD</button>
          <img src={avatar} className="nav__avatar" alt="user avatar" forHTML="search"></img>
        </div>
        <button className="nav__button">UPLOAD</button>
      </form>
    </nav>
  );
};

export default Nav;