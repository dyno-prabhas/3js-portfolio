import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Clients from './sections/Clients'
import Footer from './sections/Footer'
import Contact from './sections/Contact'
import Experience from './sections/Experience'


function App() {
  return (
    <main className='max-w-7xl mx-auto'> 
      
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Clients />
      <Experience />
      <Contact />
      <Footer />
      
    </main>
  )
}

export default App