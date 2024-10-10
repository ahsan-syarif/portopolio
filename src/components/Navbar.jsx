import React, { useState } from 'react'
import logo from '../assets/medikacom2.png'
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok , } from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="medikacom2.png" />
        </div>
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="/" className="navbar-item">Beranda</a>
          <a href="/tentang" className="navbar-item">Tentang</a>
          <a href="/layanan" className="navbar-item">Layanan</a>
          <a href="/kontak" className="navbar-item">Kontak</a>
        </div>
        <div className="navbar-social">
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaYoutube /></a>
          <a href="https://shorturl.at/v5Dxy" target="_blank" rel="noopener noreferrer" className="social-icon"><FaTiktok /></a>
          <a href="https://shorturl.at/f8F43" target="_blank" rel="noopener noreferrer" className="social-icon"><FaInstagram /></a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaFacebook /></a>
        </div>
        <button className="navbar-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
       </div>
    </nav>
  );
};

export default Navbar;