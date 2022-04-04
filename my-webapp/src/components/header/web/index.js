import React from 'react'
import { BsPersonSquare } from "react-icons/bs";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { BsFillBrightnessAltHighFill } from "react-icons/bs";
import { MdContactPage } from "react-icons/md";
import './web.css'

function Web() {
  return (
    <div className='web'>
        <div className='web-option'>
            <a href='#experience'>
                <i class='option-icon'>
                    <BsPersonSquare/> 
                </i>Experience
            </a>
        </div>

        <div className='web-option'>
            <a href='#skills'>
                <i class='option-icon'>
                    <BsFillPersonLinesFill/>
                </i>Skills
            </a>
        </div>

        <div className='web-option'>
            <a href='#aboutme'>
                <i class='option-icon'>
                <BsFillBrightnessAltHighFill/>
                </i>About me 
            </a>
        </div>

        <di className='web-option'>
            <a  href='#contact'>
                <i class='option-icon'>
                <MdContactPage/>
                </i>Contact me
            </a>
        </di>
 
    </div>
  )
}

export default Web

