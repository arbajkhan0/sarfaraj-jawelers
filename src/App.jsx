import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Collections from './components/Collections'
import Gallery from './components/Gallery'
import WhyUs from './components/WhyUs'
import TrustedBrands from './components/TrustedBrands'
import Newsletter from './components/Newsletter'
import Blog from './components/Blog'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Collections />
      <Gallery />
      <WhyUs />
      <TrustedBrands />
      <Newsletter />
      <Blog />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App