import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const buttonStyle = {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    backgroundColor: '#25D366',
    color: 'white',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.75rem',
    boxShadow: '0 4px 20px rgba(37, 211, 102, 0.3)',
    cursor: 'pointer',
    zIndex: 999,
    textDecoration: 'none',
    transition: 'transform 0.3s ease',
  };

  return (
    <a
      href="https://wa.me/918081099281"
      target="_blank"
      rel="noreferrer"
      style={buttonStyle}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;