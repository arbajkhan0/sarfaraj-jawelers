import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navStyle = {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    backgroundColor: 'var(--cream)',
    transition: 'all 0.3s ease',
    borderBottom: 'none',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: isScrolled ? '1rem 2rem' : '1.5rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'padding 0.3s ease',
  };

  const logoStyle = {
    textAlign: 'left',
    cursor: 'pointer',
  };

  const logoTextStyle = {
    fontFamily: 'var(--font-heading)',
    fontSize: isScrolled ? '1.5rem' : '1.8rem',
    fontWeight: 600,
    color: 'var(--dark)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    transition: 'font-size 0.3s ease',
  };

  const logoTaglineStyle = {
    fontSize: '0.75rem',
    color: 'var(--light-gray)',
    marginTop: '0.25rem',
    letterSpacing: '1px',
  };

  const navLinksStyle = {
    display: 'flex',
    listStyle: 'none',
    gap: '2.5rem',
    alignItems: 'center',
  };

  const linkStyle = {
    color: 'var(--dark)',
    textDecoration: 'none',
    fontWeight: 500,
    fontFamily: 'var(--font-body)',
    transition: 'color 0.3s',
    cursor: 'pointer',
    fontSize: '0.95rem',
    letterSpacing: '0.3px',
  };

  const hamburgerStyle = {
    display: 'none',
    flexDirection: 'column',
    gap: '0.35rem',
    cursor: 'pointer',
  };

  const lineStyle = {
    width: '22px',
    height: '2px',
    backgroundColor: 'var(--dark)',
  };

  const mobileMenuStyle = {
    display: isMenuOpen ? 'flex' : 'none',
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: 'var(--cream)',
    flexDirection: 'column',
    padding: '1.5rem 2rem',
    gap: '1.25rem',
    borderBottom: '1px solid #E0D8CE',
    listStyle: 'none',
  };

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <div style={logoStyle} onClick={() => scrollToSection('home')}>
          <div style={logoTextStyle}>
            ✦ Sarfaraj Jawelers
          </div>
          <div style={logoTaglineStyle}>PURE GOLD & SILVER</div>
        </div>
        
        <ul className="desktop-nav" style={navLinksStyle}>
          <li><span style={linkStyle} onClick={() => scrollToSection('home')}>Home</span></li>
          <li><span style={linkStyle} onClick={() => scrollToSection('collections')}>Collections</span></li>
          <li><span style={linkStyle} onClick={() => scrollToSection('about')}>About</span></li>
          <li><span style={linkStyle} onClick={() => scrollToSection('contact')}>Contact</span></li>
        </ul>

        <div className="hamburger" style={hamburgerStyle} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span style={lineStyle}></span>
          <span style={lineStyle}></span>
          <span style={lineStyle}></span>
        </div>
      </div>
      
      <ul style={mobileMenuStyle}>
        <li><span style={linkStyle} onClick={() => scrollToSection('home')}>Home</span></li>
        <li><span style={linkStyle} onClick={() => scrollToSection('collections')}>Collections</span></li>
        <li><span style={linkStyle} onClick={() => scrollToSection('about')}>About</span></li>
        <li><span style={linkStyle} onClick={() => scrollToSection('contact')}>Contact</span></li>
      </ul>
    </nav>
  );
};

export default Navbar;