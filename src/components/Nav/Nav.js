import React from "react";
import './Nav.scss';
import logo from '../../assets/Logo/BrainFlix-logo.svg';
import avatar from '../../assets/Images/Mohan-muruge.jpg';

const Nav = () => {

  return (
    <div className="nav">
      <img src={logo} className="nav__logo" alt="site logo"></img>
      <form className="nav__form">
        <input type="text" name="search" className="nav__search" placeholder="Search"></input>
        <img src={avatar} className="nav__avatar" alt="user avatar" forHTML="search"></img>
        <button className="nav__button">UPLOAD</button>
      </form>
    </div>
  );
};

export default Nav;