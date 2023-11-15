import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function Nav() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  useEffect(() => {
    // Add this effect to initialize Bootstrap dropdown
    if (isSmallScreen) {
      document.querySelectorAll('.dropdown-toggle').forEach((dropdownToggle) => {
        dropdownToggle.setAttribute('data-bs-toggle', 'dropdown');
      });
    }
  }, [isSmallScreen]);

  return (
    <nav className="flex-grow-2">
      {isSmallScreen ? (
        <div >
          <button
            className="btn" // Add Bootstrap's dropdown-toggle class
            type="button"
            data-bs-toggle="dropdown"
          >
            <FaBars />
          </button>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="/little-lemon">
                Home
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/little-lemon/menu">
                Menu
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/little-lemon/reservation">
                Reservation
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <ul className="d-flex justify-content-end list-unstyled m-0">
          <li>
            <Link className="section-categories text-dark text-decoration-none px-3" to="/little-lemon">
              Home
            </Link>
          </li>
          <li>
            <Link className="section-categories text-dark text-decoration-none px-3" to="/little-lemon/menu">
              Menu
            </Link>
          </li>
          <li>
            <Link className="section-categories text-dark text-decoration-none px-3" to="/little-lemon/reservation">
              Reservation
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Nav;
