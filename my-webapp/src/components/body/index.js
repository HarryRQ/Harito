import React from 'react'
import About from './about'
import './body.css'
import Contact from './contact'
import Experience from './experience'
import Skills from './skills'
import Aboutme from './about_me'

function Body() {
  return (
    <div className='body'>
      <section id='about'>
        <About/>
      </section>
      <section id='experience'>
        <Experience/>
      </section>
      <section id='skills'>
        <Skills/>
      </section>
      <section id='aboutme'>
        <Aboutme/>
      </section>
      <section id='contact'>
        <Contact/>
      </section>
    </div>
  )
}

export default Body

