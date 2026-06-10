import React, { useState } from 'react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryImages = [
    "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&q=80",
    "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&q=80",
    "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&q=80",
    "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=500&q=80",
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=500&q=80",
    "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&q=80",
    "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=500&q=80",
    "https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=500&q=80"
  ]

  return (
    <>
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '5rem 2rem'
      }}>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '2.5rem',
          color: 'var(--dark)',
          textAlign: 'center',
          marginBottom: '4rem'
        }}>
          Our Jewelry Gallery
        </h2>

        <div className='gallery-grid' style={{
          columns: 3,
          columnGap: '16px'
        }}>
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className='gallery-item'
              style={{
                breakInside: 'avoid',
                marginBottom: '16px',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid rgba(201,168,76,0.15)',
                cursor: 'pointer',
                position: 'relative',
                backgroundColor: 'var(--cream)'
              }}
              onClick={() => setSelectedImage(src)}
            >
              <img
                src={src}
                alt={`Jewelry item ${index + 1}`}
                loading='lazy'
                onLoad={(e) => e.target.classList.add('loaded')}
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80'
                }}
                style={{
                  width: '100%',
                  display: 'block',
                  transition: 'transform 0.4s ease',
                  opacity: 0,
                  transition: 'opacity 0.4s ease, transform 0.4s ease',
                  objectFit: 'cover',
                  height: 'auto'
                }}
              />
              <div
                className='gallery-overlay'
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(201,168,76,0.15)',
                  opacity: 0,
                  transition: 'opacity 0.3s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)',
                  fontSize: '14px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-body)',
                  fontWeight: '500'
                }}
              >
                View
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.92)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '2rem'
          }}
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation()
              setSelectedImage(null)
            }}
            style={{
              position: 'absolute',
              top: '2rem',
              right: '2rem',
              background: 'none',
              border: '2px solid var(--primary)',
              color: 'var(--primary)',
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              fontSize: '1.5rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt='Selected jewelry'
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              objectFit: 'contain',
              borderRadius: '8px'
            }}
          />
        </div>
      )}
    </>
  )
}

export default Gallery