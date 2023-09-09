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
              <li className='mb-2 footer-link'><Link className="text-white text-decoration-none" to="/little-lemon">Home</Link></li>
              <li className='mb-2 footer-link'><Link className="text-white text-decoration-none" to="/little-lemon/menu">Menu</Link></li>
              <li className='mb-2 footer-link'><Link className="text-white text-decoration-none" to="/little-lemon/reservation">Reservation</Link></li>
              <li className='mb-2 footer-link'><Link className="text-white text-decoration-none" to="/little-lemon/order">Order Online</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-yellow fw-bold mb-3">Contact</h5>
            <ul className="list-unstyled text-white">
              <li className='mb-2' ><a className='map-link' href='https://www.google.es/maps/place/152+W+Taylor+St,+Chicago,+IL+60605,+EE.+UU./@41.8690433,-87.6361032,16z/data=!4m5!3m4!1s0x880e2c90e1a38841:0x30acfd66e8df63ef!8m2!3d41.8690393!4d-87.6309534?hl=es'><FaMapMarkerAlt className="me-3 fs-5"/>Taylor, St.Chicago, 152</a></li>
              <li className='mb-2'><FaPhone className="me-3 fs-5" />945 567 332</li>
              <li className='mb-2'><FaEnvelope className="me-3 fs-5" />little@lemon.com</li>
            </ul>
          </div>
          <div>
            <h5 className="text-yellow fw-bold">Social Media Links</h5>
            <div className="d-flex fs-3">
              <a href="https://www.facebook.com/" className="social-link text-white me-3"><FaFacebook /></a>
              <a href="https://www.instagram.com/" className="social-link text-white me-3"><FaInstagram /></a>
              <a href="https://www.whatsapp.com/" className="social-link text-white me-3"><FaWhatsapp /></a>
              <a href="https://www.twitter.com/" className="social-link text-white me-3"><FaTwitter /></a>
              <a href="https://www.tiktok.com/" className="social-link text-white"><FaTiktok /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
