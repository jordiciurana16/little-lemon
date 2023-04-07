import React from 'react';
import Nav from './Nav';
import logo from '../../assets/img/logo.png';

function Header() {
  return (
    <header className="d-flex align-items-center content-padding">
      <div className="flex-grow-1 d-flex justify-content-start py-4">
        <a href="/">
          <img className='logo' src={logo} alt="Little Lemon"/>
        </a>
      </div>
      <Nav />
    </header>
  );
}

export default Header;
