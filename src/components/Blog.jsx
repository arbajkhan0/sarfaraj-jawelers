import React from 'react';

const Blog = () => {
  const sectionStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '5rem 2rem',
  };

  const titleStyle = {
    fontFamily: 'var(--font-heading)',
    fontSize: '2.5rem',
    color: 'var(--dark)',
    textAlign: 'center',
    marginBottom: '4rem',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '3rem',
  };

  const cardStyle = {
    backgroundColor: 'transparent',
  };

  const imageContainerStyle = {
    backgroundColor: 'var(--cream-light)',
    padding: '2rem 1.5rem',
    marginBottom: '1.5rem',
    borderRadius: '2px',
  };

  const contentStyle = {
    textAlign: 'center',
  };

  const categoryStyle = {
    fontSize: '0.85rem',
    color: 'var(--primary)',
    marginBottom: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  };

  const blogTitleStyle = {
    fontFamily: 'var(--font-heading)',
    fontSize: '1.35rem',
    color: 'var(--dark)',
    marginBottom: '0.75rem',
  };

  const descriptionStyle = {
    color: 'var(--gray)',
    fontSize: '0.95rem',
    lineHeight: '1.6',
  };

  const blogs = [
    {
      id: 1,
      category: 'For Beauty',
      title: 'Fine Beauty',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80'
    },
    {
      id: 2,
      category: 'Product Quality',
      title: 'Product Quality',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80'
    },
    {
      id: 3,
      category: 'For Comfort',
      title: 'For Comfort',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
      image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&q=80'
    },
  ];

  return (
    <section style={sectionStyle}>
      <h2 style={titleStyle}>Our Blogs</h2>
      <div style={gridStyle}>
        {blogs.map((blog) => (
          <div key={blog.id} style={cardStyle}>
            <div style={imageContainerStyle}>
              <img 
                src={blog.image} 
                alt={blog.title}
                loading='lazy'
                onLoad={(e) => e.target.classList.add('loaded')}
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.parentNode.innerHTML = '<div style="width:100%;height:250px;background:linear-gradient(135deg, #E8DFD3 0%, #D4C5B5 100%);display:flex;align-items:center;justify-content:center;color:var(--primary);font-size:1.25rem;font-family:var(--font-heading);">Blog '+blog.id+'</div>'
                }}
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '2px',
                  opacity: 0,
                  transition: 'opacity 0.4s ease'
                }}
              />
            </div>
            <div style={contentStyle}>
              <div style={categoryStyle}>{blog.category}</div>
              <h3 style={blogTitleStyle}>{blog.title}</h3>
              <p style={descriptionStyle}>{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;