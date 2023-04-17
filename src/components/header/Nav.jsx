import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="flex-grow-2">
      <ul className="d-flex justify-content-end list-unstyled m-0">
        <li><Link className="section-categories text-dark text-decoration-none px-3" to="/">Home</Link></li>
        <li><Link className="section-categories text-dark text-decoration-none px-3" to="/menu">Menu</Link></li>
        <li><Link className="section-categories text-dark text-decoration-none px-3" to="/reservation">Reservation</Link></li>
        <li><Link className="section-categories text-dark text-decoration-none text-nowrap" to="/order">Order online</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
