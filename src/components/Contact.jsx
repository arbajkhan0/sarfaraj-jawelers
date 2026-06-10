import React, { useState } from 'react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your enquiry! We will get back to you soon.');
    setFormData({ name: '', phone: '', message: '' });
  };

  const sectionStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '5rem 2rem',
  };

  const titleStyle = {
    fontFamily: 'var(--font-heading)',
    fontSize: '2.8rem',
    color: 'var(--maroon)',
    textAlign: 'center',
    marginBottom: '3rem',
  };

  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '3rem',
  };

  const infoStyle = {
  };

  const infoTitle = {
    fontFamily: 'var(--font-heading)',
    color: 'var(--maroon)',
    marginBottom: '1rem',
    fontSize: '2rem',
  };

  const infoText = {
    marginBottom: '1rem',
    fontSize: '1.1rem',
  };

  const buttonsStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginTop: '1.5rem',
  };

  const btnCallStyle = {
    padding: '1rem 2rem',
    border: 'none',
    borderRadius: '50px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    backgroundColor: 'var(--gold)',
    color: 'var(--dark)',
    fontFamily: 'var(--font-body)',
  };

  const btnWaStyle = {
    ...btnCallStyle,
    backgroundColor: '#25D366',
    color: 'white',
  };

  const formStyle = {
    backgroundColor: 'white',
    padding: '2.5rem',
    borderRadius: '15px',
    boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
  };

  const groupStyle = {
    marginBottom: '1.2rem',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: '500',
  };

  const inputStyle = {
    width: '100%',
    padding: '0.9rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    fontSize: '1rem',
    fontFamily: 'var(--font-body)',
  };

  const submitBtnStyle = {
    ...btnCallStyle,
    width: '100%',
    marginTop: '0.5rem',
    backgroundColor: 'var(--maroon)',
    color: 'white',
  };

  return (
    <section id="contact" style={sectionStyle}>
      <h2 style={titleStyle}>Contact Us</h2>
      <div className="two-col-grid" style={containerStyle}>
        <div style={infoStyle}>
          <h3 style={infoTitle}>Sarfaraj Jewelers</h3>
          <p style={infoText}><strong>Address:</strong> Rudauli, Uttar Pradesh</p>
          <p style={infoText}><strong>Phone:</strong> +91 8081099281</p>
          <div style={buttonsStyle}>
            <a href="tel:+918081099281" style={btnCallStyle}>
              <FaPhone /> Call Now
            </a>
            <a href="https://wa.me/918081099281" target="_blank" rel="noreferrer" style={btnWaStyle}>
              <FaWhatsapp /> WhatsApp Us
            </a>
          </div>
        </div>
        <form style={formStyle} onSubmit={handleSubmit}>
          <div style={groupStyle}>
            <label style={labelStyle} htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              required 
              value={formData.name} 
              onChange={(e) => setFormData({...formData, name: e.target.value})} 
              style={inputStyle} 
            />
          </div>
          <div style={groupStyle}>
            <label style={labelStyle} htmlFor="phone">Phone</label>
            <input 
              type="tel" 
              id="phone" 
              required 
              value={formData.phone} 
              onChange={(e) => setFormData({...formData, phone: e.target.value})} 
              style={inputStyle} 
            />
          </div>
          <div style={groupStyle}>
            <label style={labelStyle} htmlFor="message">Message</label>
            <textarea 
              id="message" 
              rows="4" 
              required 
              value={formData.message} 
              onChange={(e) => setFormData({...formData, message: e.target.value})} 
              style={{...inputStyle, resize: 'vertical'}} 
            />
          </div>
          <button type="submit" style={submitBtnStyle}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
