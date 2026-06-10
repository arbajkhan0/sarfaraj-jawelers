import React from 'react'
import { products } from '../data/products'

const Collections = () => {
  const handleEnquiryClick = (whatsappMsg) => {
    window.location.href = `https://wa.me/918081099281?text=${encodeURIComponent(whatsappMsg)}`
  }

  return (
    <section
      id='collections'
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '5rem 2rem'
      }}
    >
      <h2 style={{
        fontFamily: 'var(--font-heading)',
        fontSize: '2.5rem',
        color: 'var(--dark)',
        textAlign: 'center',
        marginBottom: '1rem'
      }}>
        Our Collections
      </h2>
      <p style={{
        color: 'var(--gray)',
        textAlign: 'center',
        marginBottom: '4rem',
        fontSize: '1rem'
      }}>
        Discover our handcrafted jewelry pieces
      </p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
        gap: '2rem'
      }}>
        {products.map((product) => (
          <div
            key={product.id}
            className='product-card'
            style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div className='card-image' style={{
              width: '100%',
              height: '220px',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <img
                src={product.image}
                alt={product.name}
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
                  objectPosition: 'center',
                  transition: 'transform 0.5s ease',
                  opacity: 0,
                  transition: 'opacity 0.4s ease, transform 0.5s ease'
                }}
              />
            </div>
            <div style={{ padding: '1.5rem' }}>
              <div style={{
                fontSize: '1rem',
                fontWeight: 500,
                marginBottom: '0.5rem',
                color: 'var(--dark)',
                fontFamily: 'var(--font-heading)'
              }}>
                {product.name}
              </div>
              <div style={{
                fontSize: '0.85rem',
                color: 'var(--primary)',
                fontWeight: 500,
                marginBottom: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                {product.material}
              </div>
              <div style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                color: 'var(--primary)',
                marginBottom: '1.25rem'
              }}>
                {product.price}
              </div>
              <button
                onClick={() => handleEnquiryClick(product.whatsappMsg)}
                style={{
                  width: '100%',
                  padding: '0.9rem',
                  backgroundColor: 'var(--dark)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontWeight: 500,
                  fontFamily: 'var(--font-body)',
                  transition: 'background-color 0.3s ease',
                  fontSize: '0.95rem'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--primary)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--dark)'}
              >
                Enquire Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Collections