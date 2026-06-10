import React from 'react'

const WhyUs = () => {
  return (
    <section
      id='about'
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '6rem 2rem'
      }}
    >
      <div className='two-col-grid' style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'center'
      }}>
        <div style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1610375461246-83df859d849d?w=800&q=80')`,
          backgroundSize: 'cover',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(15,7,0,0.88)',
          padding: '3rem',
          borderRadius: '12px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1.5rem',
          minHeight: '400px',
          alignItems: 'end'
        }}>
          <div style={{
            height: '200px',
            background: 'linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--primary)',
            fontSize: '1.15rem',
            fontFamily: 'var(--font-heading)',
            fontWeight: '500'
          }}>
            Premium
          </div>
          <div style={{
            height: '200px',
            background: 'linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--primary)',
            fontSize: '1.15rem',
            fontFamily: 'var(--font-heading)',
            fontWeight: '500'
          }}>
            Quality
          </div>
        </div>

        <div style={{ padding: '2rem 0' }}>
          <div style={{
            color: 'var(--primary)',
            fontWeight: 500,
            marginBottom: '1rem',
            fontSize: '0.9rem',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Why Choose Us
          </div>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '2.25rem',
            color: 'var(--dark)',
            marginBottom: '1rem'
          }}>
            100% Gold Earring
          </h2>
          <p style={{
            color: 'var(--gray)',
            marginBottom: '1.5rem',
            fontSize: '0.95rem',
            lineHeight: '1.7'
          }}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit exercitation veniam.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{
              fontSize: '1rem',
              marginBottom: '0.75rem',
              paddingLeft: '1.5rem',
              position: 'relative',
              color: 'var(--dark)'
            }}>
              <span style={{
                position: 'absolute',
                left: 0,
                color: 'var(--primary)'
              }}>✦</span>
              Certified Purity
            </li>
            <li style={{
              fontSize: '1rem',
              marginBottom: '0.75rem',
              paddingLeft: '1.5rem',
              position: 'relative',
              color: 'var(--dark)'
            }}>
              <span style={{
                position: 'absolute',
                left: 0,
                color: 'var(--primary)'
              }}>✦</span>
              Custom Designs
            </li>
            <li style={{
              fontSize: '1rem',
              marginBottom: '0.75rem',
              paddingLeft: '1.5rem',
              position: 'relative',
              color: 'var(--dark)'
            }}>
              <span style={{
                position: 'absolute',
                left: 0,
                color: 'var(--primary)'
              }}>✦</span>
              Best Prices
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default WhyUs