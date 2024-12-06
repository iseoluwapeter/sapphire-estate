import React from 'react'
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Testimonials from './assets/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header/>
      <About/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

