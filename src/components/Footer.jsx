import React from 'react';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const footerStyle = {
    backgroundColor: 'var(--dark)',
    color: 'white',
    padding: '4rem 2rem',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '4rem',
    '@media (max-width: 900px)': {
      gridTemplateColumns: '1fr',
      textAlign: 'center',
    },
  };

  const logoStyle = {
    marginBottom: '1rem',
  };

  const logoTextStyle = {
    fontFamily: 'var(--font-heading)',
    fontSize: '1.5rem',
    fontWeight: 600,
    color: 'var(--primary)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  };

  const socialStyle = {
    display: 'flex',
    gap: '1.25rem',
    marginTop: '1.5rem',
  };

  const socialLinkStyle = {
    color: 'var(--light-gray)',
    fontSize: '1.25rem',
    transition: 'color 0.3s',
    textDecoration: 'none',
  };

  const columnTitleStyle = {
    fontFamily: 'var(--font-heading)',
    fontSize: '1.1rem',
    marginBottom: '1.5rem',
    color: 'white',
  };

  const linkStyle = {
    color: 'var(--light-gray)',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '0.75rem',
    transition: 'color 0.3s',
    fontSize: '0.95rem',
  };

  const copyrightStyle = {
    maxWidth: '1200px',
    margin: '3rem auto 0',
    paddingTop: '2rem',
    borderTop: '1px solid rgba(255,255,255,0.1)',
    color: 'var(--light-gray)',
    fontSize: '0.85rem',
    textAlign: 'center',
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div>
          <div style={logoStyle}>
            <div style={logoTextStyle}>
              ✦ Sarfaraj Jawelers
            </div>
          </div>
          <p style={{color: 'var(--light-gray)', fontSize: '0.95rem', maxWidth: '250px'}}>
            Pure Gold & Silver jewelry trusted for generations in Rudauli.
          </p>
          <div style={socialStyle}>
            <a href="#" style={socialLinkStyle} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--light-gray)'}>
              <FaFacebook />
            </a>
            <a href="#" style={socialLinkStyle} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--light-gray)'}>
              <FaInstagram />
            </a>
            <a href="https://wa.me/918081099281" target="_blank" rel="noreferrer" style={socialLinkStyle} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--light-gray)'}>
              <FaWhatsapp />
            </a>
          </div>
        </div>
        <div>
          <h4 style={columnTitleStyle}>Quick Links</h4>
          <a href="#home" style={linkStyle} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--light-gray)'}>Home</a>
          <a href="#collections" style={linkStyle} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--light-gray)'}>Collections</a>
          <a href="#about" style={linkStyle} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--light-gray)'}>About Us</a>
          <a href="#contact" style={linkStyle} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--light-gray)'}>Contact</a>
        </div>
        <div>
          <h4 style={columnTitleStyle}>Contact</h4>
          <p style={{color: 'var(--light-gray)', marginBottom: '0.75rem', fontSize: '0.95rem'}}>
            Rudauli, Uttar Pradesh
          </p>
          <p style={{color: 'var(--light-gray)', marginBottom: '0.75rem', fontSize: '0.95rem'}}>
            +91 8081099281
          </p>
        </div>
      </div>
      <div style={copyrightStyle}>
        © 2025 Sarfaraj Jawelers, Rudauli. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;