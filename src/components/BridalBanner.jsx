import React from 'react';

const BridalBanner = () => {
  const bannerStyle = {
    background: 'linear-gradient(135deg, var(--maroon), var(--dark))',
    padding: '4rem 2rem',
    textAlign: 'center',
    color: 'white',
  };

  const titleStyle = {
    fontFamily: 'var(--font-heading)',
    fontSize: '2.5rem',
    marginBottom: '1rem',
  };

  const descStyle = {
    fontSize: '1.2rem',
    color: '#ccc',
    marginBottom: '1.5rem',
  };

  const btnStyle = {
    padding: '0.9rem 2rem',
    border: '2px solid var(--gold)',
    backgroundColor: 'transparent',
    color: 'var(--gold)',
    borderRadius: '50px',
    fontWeight: '600',
    cursor: 'pointer',
    fontFamily: 'var(--font-body)',
    transition: 'all 0.3s ease',
  };

  const handleClick = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section style={bannerStyle}>
      <h2 style={titleStyle}>Special Bridal Collection</h2>
      <p style={descStyle}>Design your dream wedding jewelry with us</p>
      <button style={{...btnStyle, ':hover': { backgroundColor: 'var(--gold)', color: 'var(--dark)' }}} 
        onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--dark)'; }} 
        onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--gold)'; }} 
        onClick={handleClick}
      >
        Book Your Consultation
      </button>
    </section>
  );
};

export default BridalBanner;
