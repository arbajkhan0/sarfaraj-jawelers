import React from 'react';

const TrustedBrands = () => {
  const sectionStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '4rem 2rem',
    borderTop: '1px solid #E0D8CE',
  };

  const titleStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: '0.9rem',
    fontWeight: 500,
    color: 'var(--light-gray)',
    textAlign: 'center',
    marginBottom: '2.5rem',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  };

  const brandsGridStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '2rem',
  };

  const brandStyle = {
    fontFamily: 'var(--font-heading)',
    fontSize: '1.5rem',
    fontWeight: 600,
    color: 'var(--light-gray)',
    opacity: 0.6,
  };

  const brands = ['PlumKay', 'umbraco', 'PearlHues', 'BridalPearl', 'PlumKay'];

  return (
    <section style={sectionStyle}>
      <h3 style={titleStyle}>Trusted by leading companies</h3>
      <div style={brandsGridStyle}>
        {brands.map((brand, index) => (
          <div key={index} style={brandStyle}>
            {brand}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedBrands;