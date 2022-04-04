import React from 'react'
import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import './contact.css'
import { Link } from 'react-router-dom';
import CV from './CV/cv';


function Contact() {
  return (
    <div className='contact' id='contact'>
      Contact/Info
      <div className='rounded-divider'>
      </div>
      <div className='contact-icons'>
      <ul>
        <li>
          <a href='https://www.linkedin.com/in/harry-rivera-2a5958224/' target='_blank' rel='noreferrer'>
            <AiFillLinkedin/>
          </a>
        </li>
        <li>
          <a href='https://github.com/HarryRQ' target='_blank' rel='noreferrer'>
          <GoMarkGithub/>
          </a>
        </li>
        <li>
          <a href='mailto:harry.riveraq@gmail.com'>
            <MdEmail/>
          </a>
        </li>
        <li>
          <div className='download'>
              <a download href={require('../../../assets/Resume.pdf')}>
                Download CV
              </a>
          </div>
        </li>

        
      </ul>
      </div>
    </div>
  )
}

export default Contact


