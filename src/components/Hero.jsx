import React from 'react'

const Hero = () => {
  const handleEnquiryClick = () => {
    window.location.href = 'https://wa.me/918081099281'
  }

  return (
    <section
      id='home'
      style={{
        padding: '8rem 2rem',
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: `linear-gradient(
        rgba(15,7,0,0.85),
        rgba(15,7,0,0.92)
      ), url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ padding: '2rem 0' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            background: 'var(--primary)',
            color: 'white',
            padding: '0.5rem 1.25rem',
            borderRadius: '50px',
            fontSize: '0.85rem',
            fontWeight: '500',
            marginBottom: '2rem',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            <span style={{ width: '8px', height: '8px', backgroundColor: 'white', borderRadius: '50%' }}></span>
            Rudauli's Finest
          </div>

          <h1 className='hero-heading' style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '3.5rem',
            lineHeight: '1.2',
            marginBottom: '1.5rem',
            color: 'white'
          }}>
            Rudauli's Most Trusted Jewelers <br />
            Where Every Piece <br />
            Tells a Golden Story
          </h1>

          <p style={{
            color: 'var(--primary)',
            fontSize: '1.25rem',
            fontStyle: 'italic',
            fontFamily: 'var(--font-heading)',
            marginBottom: '2rem'
          }}>
            Handcrafted with love. Worn with pride.
          </p>

          <p style={{
            color: '#ccc',
            fontSize: '1rem',
            marginBottom: '2.5rem',
            maxWidth: '500px',
            lineHeight: '1.8'
          }}>
            From radiant bridal sets to everyday gold & silver — Sarfaraj Jewelers brings you certified purity, custom designs, and the finest craftsmanship at the best prices in Rudauli
          </p>

          <button
            style={{
              backgroundColor: 'var(--dark)',
              color: 'white',
              border: '1px solid var(--primary)',
              padding: '1rem 2.5rem',
              fontSize: '1rem',
              fontWeight: '500',
              cursor: 'pointer',
              borderRadius: '0',
              transition: 'background-color 0.3s',
              fontFamily: 'var(--font-body)'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--primary)'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--dark)'}
            onClick={handleEnquiryClick}
          >
            Shop Now
          </button>
        </div>

        <div style={{ position: 'relative' }}>
          <div className='hero-image-box' style={{
            position: 'relative',
            border: '2px solid rgba(201,168,76,0.35)',
            borderRadius: '12px',
            overflow: 'hidden',
            height: '420px',
            backgroundColor: 'var(--dark)'
          }}>
            <img
              src='https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=700&q=80'
              alt='Sarfaraj Jewelers Collection'
              loading='lazy'
              onLoad={(e) => e.target.classList.add('loaded')}
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.parentNode.style.background = 'linear-gradient(135deg, #1a0a00, #3d1a00)'
              }}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0,
                transition: 'opacity 0.4s ease',
                display: 'block'
              }}
            />
            <div className='image-overlay-badge' style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(transparent, rgba(15,7,0,0.92))',
              padding: '40px 20px 20px',
              textAlign: 'center',
              color: 'var(--primary)'
            }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', marginBottom: '0.25rem' }}>Sarfaraj Jewelers</div>
              <div style={{ fontSize: '0.9rem', color: '#aaa' }}>Rudauli, Uttar Pradesh</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero