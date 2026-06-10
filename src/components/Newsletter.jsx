import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const sectionStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '5rem 2rem',
  };

  const containerStyle = {
    textAlign: 'center',
  };

  const titleStyle = {
    fontFamily: 'var(--font-heading)',
    fontSize: '2rem',
    color: 'var(--dark)',
    marginBottom: '0.5rem',
  };

  const subtitleStyle = {
    color: 'var(--light-gray)',
    marginBottom: '2rem',
    fontSize: '0.95rem',
  };

  const formStyle = {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
    maxWidth: '500px',
    margin: '0 auto',
  };

  const inputStyle = {
    flex: 1,
    minWidth: '250px',
    padding: '0.9rem 1.25rem',
    border: '1px solid #D4C9BE',
    backgroundColor: 'transparent',
    fontSize: '0.95rem',
    fontFamily: 'var(--font-body)',
    outline: 'none',
  };

  const buttonStyle = {
    padding: '0.9rem 2rem',
    border: 'none',
    backgroundColor: 'var(--dark)',
    color: 'white',
    fontSize: '0.95rem',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>Jewellery-Sho's Family</h2>
        <p style={subtitleStyle}>Be the first to know about new arrivals</p>
        <form style={formStyle} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />
          <button
            type="submit"
            style={buttonStyle}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--primary)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--dark)'}
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;