import React from 'react';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
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

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
  };

  const cardStyle = {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '15px',
    boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
  };

  const starsStyle = {
    color: 'var(--gold)',
    fontSize: '1.3rem',
    marginBottom: '1rem',
    display: 'flex',
    gap: '0.2rem',
  };

  const textStyle = {
    fontStyle: 'italic',
    marginBottom: '1rem',
    color: '#555',
  };

  const nameStyle = {
    fontWeight: '600',
    color: 'var(--maroon)',
  };

  const testimonials = [
    {
      text: "Amazing collection and pure quality! Highly recommended.",
      name: "Priya Sharma"
    },
    {
      text: "Best prices in Rudauli. Trusted shop for generations.",
      name: "Mohd. Faiz"
    },
    {
      text: "Beautiful custom designs made exactly as I wanted.",
      name: "Sunita Devi"
    }
  ];

  return (
    <section id="testimonials" style={sectionStyle}>
      <h2 style={titleStyle}>What Our Customers Say</h2>
      <div style={gridStyle}>
        {testimonials.map((t, i) => (
          <div key={i} style={cardStyle}>
            <div style={starsStyle}>
              {[1,2,3,4,5].map(n => <FaStar key={n} />)}
            </div>
            <p style={textStyle}>{t.text}</p>
            <p style={nameStyle}>{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
