import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="pt-3 pb-5">
      <div className="content-padding">
        <div className="d-flex justify-content-between pt-5">
          <div>
            <h5 className="text-yellow fw-bold">Navigation</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Home</a></li>
              <li><a href="#" className="text-white text-decoration-none">Menu</a></li>
              <li><a href="#" className="text-white text-decoration-none">Reservation</a></li>
              <li><a href="#" className="text-white text-decoration-none">Order Online</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-yellow fw-bold">Contact</h5>
            <ul className="list-unstyled text-white">
              <li><FaMapMarkerAlt className="me-2" />Taylor, St.Chicago, 152</li>
              <li><FaPhone className="me-2" />945 567 332</li>
              <li><FaEnvelope className="me-2" />little@lemon.com</li>
            </ul>
          </div>
          <div>
            <h5 className="text-yellow fw-bold">Social Media Links</h5>
            <div className="d-flex">
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
