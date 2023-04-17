import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="pt-3 pb-5">
      <div className="content-padding">
        <div className="d-flex justify-content-between pt-5">
          <div>
            <h5 className="text-yellow fw-bold mb-3">Navigation</h5>
            <ul className="list-unstyled">
              <li className='mb-2 footer-link'><Link className="text-white text-decoration-none" to="/">Home</Link></li>
              <li className='mb-2 footer-link'><Link className="text-white text-decoration-none" to="/menu">Menu</Link></li>
              <li className='mb-2 footer-link'><Link className="text-white text-decoration-none" to="/reservation">Reservation</Link></li>
              <li className='mb-2 footer-link'><Link className="text-white text-decoration-none" to="/order">Order Online</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-yellow fw-bold mb-3">Contact</h5>
            <ul className="list-unstyled text-white">
              <li className='mb-2'><FaMapMarkerAlt className="me-3 fs-5" />Taylor, St.Chicago, 152</li>
              <li className='mb-2'><FaPhone className="me-3 fs-5" />945 567 332</li>
              <li className='mb-2'><FaEnvelope className="me-3 fs-5" />little@lemon.com</li>
            </ul>
          </div>
          <div>
            <h5 className="text-yellow fw-bold">Social Media Links</h5>
            <div className="d-flex fs-3">
              <a href="#" className="text-white me-3"><FaFacebook /></a>
              <a href="#" className="text-white me-3"><FaInstagram /></a>
              <a href="#" className="text-white me-3"><FaWhatsapp /></a>
              <a href="#" className="text-white me-3"><FaTwitter /></a>
              <a href="#" className="text-white"><FaTiktok /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
