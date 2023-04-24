import React from 'react';
import BurgerMenu from './burgerMenu';
import logo from '../img/logo.png';

function Header() {
  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src={logo} alt="logo" />
      </div>
      <BurgerMenu />
    </nav>
  );
}

export default Header;
