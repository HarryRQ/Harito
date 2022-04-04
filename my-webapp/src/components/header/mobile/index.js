import React from 'react'
import { BiX } from "react-icons/bi";
import { BsPersonSquare } from "react-icons/bs";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { BsFillBrightnessAltHighFill } from "react-icons/bs";
import { MdContactPage } from "react-icons/md";
import './mobile.css'


function Mobile({isOpen, setIsOpen}) {
  return (
    <div className='mobile'>
        <div className='close-icon' onClick={() => setIsOpen(!isOpen)}>
            <i>
                <BiX/>
            </i>
        </div>
        <div className='mobile-options'>
            <div className='mobile-option'>
                <a href='#experience'>
                    <i class='option-icon'>
                        <BsPersonSquare/> 
                    </i>Experience
                </a>
            </div>

            <div className='mobile-option'>
                <a href='#skills'>
                    <i class='option-icon'>
                        <BsFillPersonLinesFill/>
                    </i>Skills
                </a>
            </div>

            <div className='mobile-option'>
                <a href='#aboutme'>
                    <i class='option-icon'>
                    <BsFillBrightnessAltHighFill/>
                    </i>About me 
                </a>
            </div>

            <di className='mobile-option'>
                <a  href='#contact'>
                    <i class='option-icon'>
                    <MdContactPage/>
                    </i>Contact me
                </a>
            </di>
            
        </div>
    </div>
  )
}

export default Mobile

