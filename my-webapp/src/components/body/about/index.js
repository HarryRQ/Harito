import React from 'react'
import Programs from '../../Programs'
import './about.css'
import Image from "../../../assets/harry_rq.png"

function About() {
  return (
    <div className='about'>
      <div className='about-top'>
        <div className='about-info'>
          Hello! <br/><span className='info-name'>I'm Harry ☀ </span> <br/>I love plants, keyboards, <br/> and the beach! 
        </div>
        <br></br>
        <div className='about-photo'>
          <img src={require('../../../assets/harry_rq.png')}
          className='harrypic' alt="pic wont load error"
          />
        </div>
      </div>
      <div className='about-bottom'>
        <Programs/>
      </div>
    </div>
  )
}

export default About

